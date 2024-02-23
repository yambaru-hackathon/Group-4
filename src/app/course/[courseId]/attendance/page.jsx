import { Box } from '@mui/material'
import React from 'react'

const Attendance = ({
  params
}) => {
  const COURSE_ID = params.courseId;
  
  return (
    <Box>
      教科ID: {COURSE_ID}
      <Box>
        出席確認ページ
      </Box>
    </Box>
  )
}

export default Attendance