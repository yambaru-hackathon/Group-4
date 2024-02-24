import { Box, Divider } from '@mui/material'
import React from 'react'
import Styles from "@/styles/styles.module.css";
import timeToString from "@/functions/timeToString";
import ListLabels from '../Lists/ListLabels';



const ScheduleCardColumn = ({
  start_time,
  end_time,
  title,
  labels,
}) => {
  return (
    <Box className={Styles.scheduleCardColumn}>
      {/* 時間カラム */}
      <Box className={Styles.scheduleCardColumnTime}>
        <Box>{timeToString(start_time)}</Box>
        <Box>~</Box>
        <Box>{timeToString(end_time)}</Box>
      </Box>

      <Box className={Styles.columnValues}>
        {/* タイトル */}
        <Box className={Styles.scheduleCardColumnTitle}>
          {title}
        </Box>

        {/* ラベル */}
        <Box>
          <ListLabels labels={labels} />
        </Box>
      </Box>
    </Box>
  )
}

export default ScheduleCardColumn