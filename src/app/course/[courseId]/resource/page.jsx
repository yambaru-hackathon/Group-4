import { Box } from '@mui/material'
import React from 'react'
import Drive from '@/drive/index.jsx'
import styles from '@/styles/styles.module.css'

const Resource = ({
  params
}) => {

  const COURSE_ID = params.courseId;

  return (
    <Box className={styles.coursePageChildrenPageComponent}>
      <Drive />
    </Box>
  )
}

export default Resource;