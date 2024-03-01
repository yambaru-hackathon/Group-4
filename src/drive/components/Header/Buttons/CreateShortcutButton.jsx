import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';

const CreateShortcut = () => {
  return (
    <Box>
      <Tooltip title="マイスペースにショートカットの作成">
        <IconButton>
          <FolderSharedRoundedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default CreateShortcut