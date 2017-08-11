rm(list=ls())
library(jsonlite)
library(tidyr)
library(dplyr)



write_data <- function(os){
  survdata <- readRDS(paste0("data/survivaldata_", os, ".rds"))
  backlogdata <- readRDS(paste0("data/backlogdata_", os, ".rds"))
  tabledata <- readRDS(paste0("data/tabledata_", os, ".rds"))
  
  survdata <- 
  survdata %>% 
    gather(key, value, -time, -surv) %>% 
    mutate(strata = paste0(key, "_", value)) %>% 
    select(-key, -value) %>% 
    spread(strata, surv)
  
  # dataset does not start on t = 0 
  # add time = 0 as baseline with 100% survival
  extrarow <- data.frame(
    time = 0
    ,strata_1 = 1
    ,strata_2 = 1
    ,strata_3 = 1
    ,strata_4 = 1
    )
  
  survdata <- rbind(extrarow, survdata)
  
  writeLines(paste0("var jsondata = ", toJSON(survdata)), paste0("data/survivaldata_", os, ".js"))
  writeLines(paste0("var backlog = ", toJSON(backlogdata)), paste0("data/backlogdata_", os, ".js"))
  writeLines(paste0("var tabledata = ", toJSON(tabledata)), paste0("data/tabledata_",os ,".js"))
}

write_data("All")
write_data("Linux")
write_data("Microsoft")