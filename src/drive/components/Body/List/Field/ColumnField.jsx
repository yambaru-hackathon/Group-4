import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';

const ColumnField = ({
  fieldName,
  width
}) => {
  return (
    <Box
      className={DriveStyles.ListViewFiledsColumn}
      width={width}
    >
      {fieldName}
    </Box>
  )
}

export default ColumnField