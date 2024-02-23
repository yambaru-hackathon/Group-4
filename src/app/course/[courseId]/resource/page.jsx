import { Box } from '@mui/material'
import React from 'react'

const Resource = ({
  params
}) => {

  const COURSE_ID = params.courseId;

  return (
    <Box>
      <Box>
        教材ID: {COURSE_ID}
      </Box>
      <Box>
        教材ページ
      </Box>
    </Box>
  )
}

export default Resource;