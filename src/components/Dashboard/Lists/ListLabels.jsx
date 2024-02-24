import { Box, Chip, Stack } from '@mui/material'
import React from 'react'
import Styles from '@/styles/styles.module.css'

const ListLabels = ({
  labels
}) => {
  return (
    <Box className={Styles.listLabelsStack}>
      <Stack spacing={2}>
        {
          labels.map((label, i) => <Chip
            key={i}
            label={label}
            size='small'
            sx={{ fontSize: "0.75rem" }}
          />)
        }
      </Stack>
    </Box>
  )
}

export default ListLabels