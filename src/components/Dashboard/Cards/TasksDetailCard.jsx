import { Box, Divider, Button } from '@mui/material'
import React, { useState } from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import Styles from "@/styles/styles.module.css";
import TasksCardColumn from "@/components/Dashboard/Columns/TasksCardColumn";

const taskTemplate = {
  "title": "第8回 演習問題",
  "subject": "電子回路Ⅱ",
  "deadline": "2024-02-23T23:50:00.000Z",
  "label": ["電子回路Ⅱ"],
  "description": "課題に関する説明文\n第8回 演習問題です。",
};

const TasksDetailCard = () => {

  const [taskData, setTaskData] = useState(taskTemplate);   // F: Recoilに更新

  return (
    <Box sx={{ height: "100%" }}>
      <Card
        title={taskData.title}
        subTitle={taskData.label[0]}
      >
        <Box className={Styles.dashboardCardContent}>
          {
            [].map(({
              deadline
            }, i) => {
              return (<>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  key={i}
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
              </>);
            })
          }
        </Box>
      </Card>
    </Box>
  )
}
  
  export default TasksDetailCard;