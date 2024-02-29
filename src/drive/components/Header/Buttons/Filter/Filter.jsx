import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

const Filter = () => {
  return (
    <Box>
      {/* ボタン */}
      <Tooltip title="ソート">
        <IconButton>
          <FilterListRoundedIcon />
        </IconButton>
      </Tooltip>

      {/* ダウン */}
    </Box>
  )
}

export default Filter