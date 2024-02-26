import { Box, Checkbox } from '@mui/material'
import React, { useState } from 'react'

const SelectCheckBox = () => {

  const [allItemSelected, setAllItemSelected] = useState(false);

  return (
    <Box>
      <Checkbox
        checked={allItemSelected}
        onChange={() => {
          setAllItemSelected(!allItemSelected);
        }}
        size='small'
      />
    </Box>
  )
}

export default SelectCheckBox