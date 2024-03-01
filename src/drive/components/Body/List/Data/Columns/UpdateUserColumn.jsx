import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';

const UpdateUserColumn = ({
  value,
  width,
}) => {
  return (
    <Box
      className={DriveStyles.ListViewDataFieldsUpdateUserColumn}
      width={width}
    >
      {/* 更新者 */}
      {value}
    </Box>
  )
}

export default UpdateUserColumn