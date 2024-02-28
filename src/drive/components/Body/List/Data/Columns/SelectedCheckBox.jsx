import { Box, Checkbox } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';

const SelectedCheckBox = ({
  selected,
  onChange = () => {},
}) => {
  return (
    <Box>
      <Checkbox
        className={DriveStyles.ListViewDataFieldsCheckBox}
        size='small'
        checked={selected}
        onChange={onChange}
        onClick={(e) => e.stopPropagation()}
      />
    </Box>
  )
}

export default SelectedCheckBox