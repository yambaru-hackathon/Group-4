import { Box } from '@mui/material'
import React from 'react'
import Card from "@/components/Dashboard/Cards/Card";

const Notices = ({
  grid,
}) => {
  return (
    <Box
      sx={{
        gridColumnStart: grid?.column[0] || "0",
        gridColumnEnd: grid?.column[1] || "1",
        gridRowStart: grid?.row[0] || "0",
        gridRowEnd: grid?.row[1] || "1",
      }}
    >
      <Card
        title="お知らせ"
      />
    </Box>
  )
}

export default Notices