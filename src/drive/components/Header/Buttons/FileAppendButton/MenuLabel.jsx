import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css'

const MenuLabel = ({
  label
}) => {
  return (
    <Box className={DriveStyles.headerFileAppendMenuLabel}>
      {label}
    </Box>
  )
}

export default MenuLabel