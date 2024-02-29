import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const InfoButton = () => {
  return (
    <Box>
      <Tooltip title="詳細">
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default InfoButton