import { Box } from '@mui/material'
import React from 'react'
import Drive from '@/drive/index.jsx'

const Resource = ({
  params
}) => {

  const COURSE_ID = params.courseId;

  return (
    <Box>
      <Drive />
    </Box>
  )
}

export default Resource;