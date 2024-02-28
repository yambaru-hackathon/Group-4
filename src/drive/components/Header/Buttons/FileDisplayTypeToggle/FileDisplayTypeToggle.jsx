"use client";
import { Box, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'
import React from 'react'
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

const fileTypes = [{
  value: 'list',
  label: 'リスト',
  icon: <ViewListRoundedIcon />,
},{
  value: 'grid',
  label: 'グリッド',
  icon: <GridViewRoundedIcon />,
}]

const FileDisplayTypeToggle = () => {
  return (
    <Box>
      <ToggleButtonGroup
        value={null}
        onChange={() => {}}
        size='small'
      >
        {
          fileTypes.map((elm, i) => {
            return (
              <Tooltip
                title={elm.label}
                key={i}
              >
                <ToggleButton value={elm.value}>
                  {elm.icon}
                </ToggleButton>
              </Tooltip>
            )
          })
        }
      </ToggleButtonGroup>
    </Box>
  )
}

export default FileDisplayTypeToggle