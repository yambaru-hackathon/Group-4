"use client"
import { Box } from '@mui/material'
import { atom, useRecoilState } from 'recoil';
import Styles from "@/styles/styles.module.css";
import TasksDetailCard from '../../../../components/Dashboard/Cards/TasksDetailCard';
import React from 'react'


const Task = ({
  params
}) => {

  return (
    <Box className={Styles.taskDetailPage}>
      <Box className={Styles.taskDetailPageContent}>
        <TasksDetailCard />
      </Box>
    </Box>
  )
}

export default Task