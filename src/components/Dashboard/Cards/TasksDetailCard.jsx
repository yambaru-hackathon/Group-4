import { Box, Divider, Button } from '@mui/material'
import React from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import Styles from "@/styles/styles.module.css";
import TasksCardColumn from "@/components/Dashboard/Columns/TasksCardColumn";

const tasksTemplate = [{
  "title": "第8回 演習問題",
  "deadline": "2024-02-23T23:50:00.000Z",
  "label": ["電子回路Ⅱ"],
},];

const TasksDetailCard = () => {
    return (
      <Box sx={{ height: "100%" }}>
        <Card
          title={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                {tasksTemplate[0].label} 第8回 演習問題
              </Box>
              <Button variant="text">提出</Button>
            </Box>
          }
        >
          <Box className={Styles.dashboardCardContent}>
            {
              tasksTemplate.map(({
                deadline
              }, i) => (
                <React.Fragment key={i}>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <TasksCardColumn
                      deadline={deadline}
                    />
                    <Divider />
                  </Box>
                  <Box sx={{ fontSize:14, marginLeft:4 }}>
                    概要
                  </Box>
                  <Box sx={{ fontSize:14, marginLeft:3 }}>
                    <Button variant="text">ファイルの添付</Button>
                  </Box>
                </React.Fragment>
              ))
            }
          </Box>
        </Card>
      </Box>
    )
  }
  
  export default TasksDetailCard;