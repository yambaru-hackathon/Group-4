import { Box, Divider } from '@mui/material'
import React from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import Styles from "@/styles/styles.module.css";
import TasksListCardColumn from "@/components/Dashboard/Columns/TasksListCardColumn";

const tasksTemplate = [{
  "title": "国語",
},{
  "title": "電子回路Ⅱ",
},];

const TasksListCard = () => {
  return (
    <Box sx={{ height: "100%"}}>
      <Card
        title="課題一覧"
        //bottomActionButton="詳細"
        //buttonActionButtonOnClick={() => {console.log("clicked")}}
      >
        <Box className={Styles.TasksdashboardCardContent}>
          {
            tasksTemplate.map(({
              title,
             // deadline,
              //label,
            }, i) => <Box
              key={i}
            >
              <TasksListCardColumn
                title={title}
              />
              <Divider />
            </Box>)
          }
        </Box>
      </Card>
    </Box>
  )
}

export default TasksListCard