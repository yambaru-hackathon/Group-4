import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';

const FileTypeColumn = ({
  value = "不明",
  width,
}) => {
  return (
    <Box
      className={DriveStyles.ListViewDataFieldsFileTypeColumn}
      width={width}
    >
      {value}
    </Box>
  )
}

export default FileTypeColumn