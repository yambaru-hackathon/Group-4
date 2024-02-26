import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from "@/styles/drive.module.css";

const FileSizeColumn = ({
  value,
  width,
}) => {
  return (
    <Box
      className={DriveStyles.ListViewDataFieldsFileSizeColumn}
      width={width}
    >
      {value}
    </Box>
  )
}

export default FileSizeColumn