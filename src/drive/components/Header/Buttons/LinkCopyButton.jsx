import React from 'react'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import { Box, IconButton, Tooltip } from '@mui/material';

const CopyLink = () => {
  return (
    <Box>
      <Tooltip title="リンクをコピー">
        <IconButton>
          <LinkRoundedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default CopyLink