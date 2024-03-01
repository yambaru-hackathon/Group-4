"use client";
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import MenuTrgButton from './MenuTrgButton'
import AppendMenu from './AppendMenu'

const FileAppendButton = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setIsMenuOpen(true);
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  }

  return (
    <Box
      sx={{
        marginRight: "8px",
      }}
    >
      {/* ボタン */}
      <MenuTrgButton onClick={handleMenuOpen} />

      {/* メニュー */}
      <AppendMenu open={isMenuOpen} onClose={handleMenuClose} anchorEl={anchorEl} />
    </Box>
  )
}

export default FileAppendButton