import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DriveStyles from "@/styles/drive.module.css";
import fileSizeString from "@/functions/fileSizeString";

const FileSizeColumn = ({
  value = null,
  width,
}) => {

  const [fileSize, setFileSize] = useState("");

  useEffect(() => {

    if (value === null) {
      setFileSize("");
    }else {
      setFileSize(fileSizeString(value));
    }
  }, [value]);

  return (
    <Box
      className={DriveStyles.ListViewDataFieldsFileSizeColumn}
      width={width}
    >
      {fileSize}
    </Box>
  )
}

export default FileSizeColumn