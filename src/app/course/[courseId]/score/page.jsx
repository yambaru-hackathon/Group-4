import { Box } from '@mui/material'
import React from 'react'

const Score = ({
  params
}) => {

  const COURSE_ID = params.courseId;

  return (
    <Box>
      <Box>
        成績ID: {COURSE_ID}
      </Box>
      <Box>
        成績ページ
      </Box>
    </Box>
  )
}

export default Score