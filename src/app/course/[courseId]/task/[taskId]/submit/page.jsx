import { Box } from '@mui/material'
import React from 'react'

const TaskSubmit = ({
  params,
}) => {

  const COURSE_ID = params.courseId;
  const TASK_ID = params.taskId;

  return (
    <Box>
      <Box>
        教材ID: {COURSE_ID}, 課題ID: {TASK_ID}
      </Box>
      <Box>
        課題詳細ページ
      </Box>
    </Box>
  )
}

export default TaskSubmit