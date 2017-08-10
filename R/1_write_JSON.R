rm(list=ls())
library(jsonlite)
library(tidyr)
library(dplyr)

survdata <- readRDS("data/survivaldata.rds")
backlogdata <- readRDS("data/backlogdata.rds")

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

writeLines(paste0("var jsondata = ", toJSON(survdata)), "data/survivaldata.js")

writeLines(paste0("var backlog = ", toJSON(backlogdata)), "data/backlogdata.js")

