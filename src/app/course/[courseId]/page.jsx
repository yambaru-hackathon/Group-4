import { Box } from '@mui/material'
import React from 'react'

const Course = ({params}) => {

  const COURSE_ID = params.courseId;

  return (
    <>
      <Box>コースページ</Box>
      <Box>コースID: {COURSE_ID}</Box>
    </>
  )
}

export default Course