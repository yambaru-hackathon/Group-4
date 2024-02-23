import { Alert, Box } from '@mui/material'
import React from 'react';
import Styles from "@/styles/styles.module.css";  

const Alerts = () => {
  return (
    <Box className={Styles.toppageAlertBox}>
      <Alert severity="info">新着のお知らせがあります</Alert>
      <Alert severity="warning">締め切りが近い課題があります</Alert>
      <Alert severity="error">今日締め切りの課題があります</Alert>
    </Box>
  )
}

export default Alerts