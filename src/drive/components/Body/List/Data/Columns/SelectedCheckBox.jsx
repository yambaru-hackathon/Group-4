import { Box, Checkbox } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';

const SelectedCheckBox = () => {
  return (
    <Box>
      <Checkbox
        className={DriveStyles.ListViewDataFieldsCheckBox}
        size='small'
      />
    </Box>
  )
}

export default SelectedCheckBox