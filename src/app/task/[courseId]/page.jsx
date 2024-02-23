import { Box } from '@mui/material';
import React from 'react'

const Task = ({
  params
}) => {

  const COURSE_ID = params.courseId;

  return (
    <Box>
      <Box>
        教科ID: {COURSE_ID}
      </Box>
      <Box>
        各教科課題一覧ページ
      </Box>
    </Box>
  )
}

export default Task