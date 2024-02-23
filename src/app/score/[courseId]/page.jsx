import { Box } from '@mui/material'
import React from 'react'

const Score = ({
  params
}) => {

  const COURSE_ID = params.courseId;

  return (
    <Box>
      <Box>
        各教科成績ページ
      </Box>
      <Box>
        教科ID: {COURSE_ID}
      </Box>
    </Box>
  )
}

export default Score