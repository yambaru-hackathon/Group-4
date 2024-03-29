"use client";
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
  "title": "漢詩翻訳問題",
  "deadline": "2024-03-02T03:30:00.000Z",
  "label": ["国語"],
},{
  "title": "漢詩まとめ問題",
  "deadline": "2024-03-05T05:50:00.000Z",
  "label": ["国語"],
},];

const TasksCard = ({
  isSingleCourse = false,
  grid,
}) => {
  return (
    <Box sx={{
      height: "100%",
      gridColumnStart: grid?.column[0] || "0",
      gridColumnEnd: grid?.column[1] || "1",
      gridRowStart: grid?.row[0] || "0",
      gridRowEnd: grid?.row[1] || "1",
    }}>
      <Card
        title="課題一覧"
        bottomActionButton={isSingleCourse? null: "詳細"}
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
                label={isSingleCourse? null: label}
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