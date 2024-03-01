import { Box, Divider } from '@mui/material'
import React from 'react'
import styles from '@/styles/styles.module.css';

const Attendance = ({
  params
}) => {
  const COURSE_ID = params.courseId;
  
  return (
    <Box>
      <Box>
        <Box className={styles.coursePageHeaderTitle}>
          出席
        </Box>
        <Divider />
      </Box>
    </Box>
  )
}

export default Attendance