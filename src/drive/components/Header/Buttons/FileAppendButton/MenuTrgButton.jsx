import { Box, Button } from '@mui/material'
import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const MenuTrgButton = ({
  onClick,
}) => {
  return (
    <Box>
      <Button
        variant='contained'
        disableElevation
        size='small'
        sx={{paddingLeft: "18px",}}
        onClick={onClick}
      >
        新規作成<KeyboardArrowDownRoundedIcon />
      </Button>
    </Box>
  )
}

export default MenuTrgButton