import { Box, Divider } from '@mui/material'
import React from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import Styles from "@/styles/styles.module.css";
import TasksCardColumn from "@/components/Dashboard/Columns/TasksCardColumn";

const tasksTemplate = [{
  "title": "第8回 演習問題",
  "deadline": "2024-02-23T23:50:00.000Z",
  "label": ["電子回路Ⅱ"],
},{
  "title": "漢詩演習問題",
  "deadline": "2024-02-24T14:30:00.000Z",
  "label": ["国語"],
},{
  "title": "漢詩演習問題",
  "deadline": "2024-02-24T14:59:00.000Z",
  "label": ["国語"],
},{
  "title": "漢詩演習問題",
  "deadline": "2024-02-25T00:30:00.000Z",
  "label": ["国語"],
},{
  "title": "漢詩演習問題",
  "deadline": "2024-02-25T14:59:00.000Z",
  "label": ["国語"],
},{
  "title": "漢詩演習問題",
  "deadline": "2024-02-27T14:59:00.000Z",
  "label": ["国語"],
},{
  "title": "漢詩翻訳問題",
  "deadline": "2024-03-02T03:30:00.000Z",
  "label": ["国語"],
},{
  "title": "漢詩まとめ問題",
  "deadline": "2024-03-05T05:50:00.000Z",
  "label": ["国語"],
},];

const TasksCard = () => {
  return (
    <Box sx={{ height: "100%"}}>
      <Card
        title="課題一覧"
        bottomActionButton="詳細"
        buttonActionButtonOnClick={() => {console.log("clicked")}}
      >
        <Box className={Styles.dashboardCardContent}>
          {
            tasksTemplate.map(({
              title,
              deadline,
              label,
            }, i) => <Box
              key={i}
            >
              <TasksCardColumn
                title={title}
                deadline={deadline}
                label={label}
              />
              <Divider />
            </Box>)
          }
        </Box>
      </Card>
    </Box>
  )
}

export default TasksCard