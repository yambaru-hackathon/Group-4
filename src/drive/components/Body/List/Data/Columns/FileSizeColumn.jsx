import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from "@/styles/drive.module.css";
import fileSizeString from "@/functions/fileSizeString";

const FileSizeColumn = ({
  value = null,
  width,
}) => {


  return (
    <Box
      className={DriveStyles.ListViewDataFieldsFileSizeColumn}
      width={width}
    >
      {value? fileSizeString(value): null}
    </Box>
  )
}

export default FileSizeColumn