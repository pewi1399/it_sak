rm(list=ls())

library(survival)
library(ggplot2)
library(dplyr)
library(tidyr)
library(knitr)


set.seed(20170817)

#-------------------------------- simulate data --------------------------------
n <- 100000
legacy_p <- 1/200

today <- as.Date(format(Sys.time(), "%Y-%m-%d"))

# make up some data
patchdata <- data.frame(
                        year = sample(2012:2017, n, replace = TRUE),
                        month = sample(1:12, n, replace = TRUE),
                        day = sample(1:31, n, replace = TRUE),
                        days = rexp(n,0.1),
                        legacy = sample(0:1,n, prob = c(1-legacy_p, legacy_p), replace = TRUE),
                        severity = sample(1:4,n, replace = TRUE),
                        os = sample(c("Linux", "Microsoft"), n, replace = TRUE),
                        type = sample(c("Server", "Client"), n, replace = TRUE)
                        )


# add date for fixes
patchdata <- 
    patchdata %>% 
    mutate(
        patch_release = as.Date(paste0(year, "-", month, "-", day), format = "%Y-%m-%d")
        ) %>% 
    filter(!is.na(patch_release) & patch_release < today) %>% 
    mutate(
        patch_fix = patch_release + round(days),
        fixed = ifelse(legacy == 1, 0,
                       ifelse(patch_fix > today, 0, 1)
        ),
        patch_fix = as.Date(ifelse(fixed == 1 , as.character(patch_fix), NA)),
        time = as.numeric(difftime(patch_fix, patch_release, units = "days")),
        time = time + severity * 5
        )

# write sample file for it_sak
patchdata %>% 
  select(os, type, severity, patch_release, patch_fix, legacy) %>% 
  openxlsx::write.xlsx(., "data/exempeldata_patchspeed.xlsx")


get_data <- function(os){
  #---------------------------- survival functions -------------------------------
  subos = os
  if(os != "All"){
    patchdata <- subset(patchdata , os == subos)
  }
  
  # calculate survival function
  
  # Since the beginning of time
  survival_function <- Surv(patchdata$time, patchdata$fixed)
  survivaltable <- survfit(survival_function~patchdata$severity)
  
  #plot(
  #    survivaltable, 
  #    col = c("red", "orange", "royalblue", "gold")
  #    )
  
  # visualise survival for latest time window
  patchdata_latest <- subset(patchdata, patch_release > today -31) 
  survival_function_latest <- Surv(patchdata_latest$time, patchdata_latest$fixed)
  survivaltable_latest <- survfit(survival_function_latest~patchdata_latest$severity)
  
  #plot(
  #    survivaltable_latest, 
  #    col = c("red", "orange", "royalblue", "gold")
  #)
  
  
  survdata <- data.frame(
    surv = survivaltable_latest$surv
    , strata = rep(
      names(survivaltable_latest$strata), 
      survivaltable_latest$strata
    )
    ,time = survivaltable_latest$time
  ) %>% 
    mutate(
      strata = as.numeric(gsub("^.*(.+?)$", "\\1",strata))
    )
  
  saveRDS(survdata, paste0("data/survivaldata_", os,".rds"))
  #-------------------------------------------------------------------------------
  
  #---------------------------- backlog and legacy -------------------------------
  
  # visualise backlog and how it has been growing
  plotdata <- patchdata %>% 
      group_by(year, month) %>% 
      summarise(backlogDelta = sum(legacy),
                influx = round(n()/20)) %>% 
      mutate(
          time = paste0(year,"-", month, "-01"),
          time = as.Date(time, format = "%Y-%m-%d"),
          backlogDelta = backlogDelta * sample(c(1,-1), n(), prob = c(0.57, 0.43), replace  = TRUE),
          backlogDelta = ifelse(time < "2012-06-01", abs(backlogDelta), backlogDelta)
             )
  
  
  # in and out of legacy every month
   bars_plot <- ggplot(plotdata)+
       aes(x = time, y = backlogDelta)+
       geom_col()
  
  
  plotdata$backlog <- cumsum(plotdata$backlogDelta)
  
   line_plot <- ggplot(plotdata)+
       aes(x = time)+
       geom_line(aes(y = backlog, group = 1))+
       xlab("")
   
   library(gridExtra)
   multiplot <- gridExtra::arrangeGrob(line_plot, bars_plot, heights = c(100,25))
   plot(multiplot)
  
  saveRDS(plotdata, paste0("data/backlogdata_",os ,".rds"))
  #-------------------------------------------------------------------------------
  
  #------------------------ diff compared to a year ago --------------------------
  tmp <- 
  patchdata %>% 
    group_by(year, os, type, severity) %>% 
    summarise(n_patches = n()) %>%
    ungroup()
    
  tabledata <- patchdata %>%   
    group_by(year, os, type) %>% 
    summarise(n_units = n() + round(rnorm(1, 500, 50))) %>% 
    ungroup() %>% 
    full_join(tmp, by = c("year", "os", "type")) %>% 
    mutate(avg_patches = round(n_patches/n_units, 2)) %>% 
    select(-n_units)
    
  # pre process data maybe do this in js in a later version
  tabledata <- 
    tabledata %>% 
    filter(year %in% 2016:2017) %>% 
    gather(key, value, -year, -os, -severity, -type) %>% 
    mutate(key = paste0(key,"_", year)) %>%
    select(-year) %>% 
    spread(key, value)
  
   #writeClipboard(kable(tabledata, format = "html"))
  
  saveRDS(tabledata, paste0("data/tabledata_", os, ".rds"))
  #-----------------------------------------------------------------------------
}
#-------------------------------------------------------------------------------
get_data("All")
get_data("Linux")

set.seed(20170819)
get_data("Microsoft")
