"use client";
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Styles from "@/styles/styles.module.css";
import TasksListCard from '../../components/Dashboard/Cards/TasksListCard';
import TasksPopupCard from '../../components/Dashboard/Cards/TasksPopupCard';

const Tasks = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleListCardClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <Box sx={{ mx: 3 }}>
      <Box className={Styles.taskspageDashboard}>
        <Box onClick={handleListCardClick}>
          <TasksListCard />
        </Box>
        {isPopupOpen && (
          <TasksPopupCard onClose={handlePopupClose} />
        )}
        {!isPopupOpen && (
          <TasksPopupCard variant="body1">教科を選択してください</TasksPopupCard>
        )}
      </Box>
    </Box>
  );
}

export default Tasks;