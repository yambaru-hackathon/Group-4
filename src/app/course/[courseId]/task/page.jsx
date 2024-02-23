import { Box } from '@mui/material'
import React from 'react'

const Tasks = ({
  params
}) => {
  const COURSE_ID = params.courseId;
  
  return (
    <Box>
      <Box>
        教科ID: {COURSE_ID}
      </Box>
      <Box>
        課題一覧ページ
      </Box>
    </Box>
  )
}

export default Tasks