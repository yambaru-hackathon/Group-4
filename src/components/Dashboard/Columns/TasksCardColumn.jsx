import { Box } from '@mui/material'
import React from 'react'
import timeToString from '@/functions/timeToString'
import dateToString from '@/functions/dateToString'
import Styles from '@/styles/styles.module.css'
import ListLabels from '@/components/Dashboard/Lists/ListLabels'
import deadTimeCountdown from '@/functions/deadTimeCountdown'

const TasksCardColumn = ({
  title,
  deadline,
  label = [],
}) => {
  return (
    <Box className={Styles.tasksCardColumn}>
      {/* 時間 */}
      <Box className={Styles.scheduleCardColumnTime}>
        {dateToString(deadline)} {timeToString(deadline)}
      </Box>

      <Box className={Styles.columnValues}>
        {/* 課題名 */}
        <Box className={Styles.scheduleCardColumnTitle}>{title}</Box>

        {/* 教科(ラベル) */}
        <Box>
          <ListLabels labels={label ?? []} />
        </Box>

        {/* 締め切りまで */}
        <Box className={Styles.tasksCardColumnDeadline} sx={{
          color: "primary.alert",
        }}>
          {deadTimeCountdown(deadline)}
        </Box>
      </Box>
    </Box>
  )
}

export default TasksCardColumn