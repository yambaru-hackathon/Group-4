import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';

const FileTypeColumn = ({
  value = "不明",
  type = "",
  width,
}) => {
  return (
    <Box
      className={DriveStyles.ListViewDataFieldsFileTypeColumn}
      width={width}
    >
      {
        type.toLocaleLowerCase() === "directory"
          ? ""
          : `${value.toUpperCase()} ファイル`
      }
    </Box>
  )
}

export default FileTypeColumn