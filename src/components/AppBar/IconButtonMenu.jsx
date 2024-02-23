"use client";
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import AvatarButton from '@/components/IconButton/AvatarButton';
import AccountMenu from '@/components/AppBar/AccountMenu';

const IconButtonMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const menuCloseHandler = () => {
    setMenuOpen(false);
  }

  useEffect(() => {
    // windowリサイズ時にメニューを閉じる
    window.addEventListener("resize", menuCloseHandler);

    return () => {
      window.removeEventListener("resize", menuCloseHandler);
    }
  }, []);

  return (
    <Box>
      <AvatarButton
        onClick={(e) => {
          setMenuOpen(true);
          setAnchorEl(e.currentTarget);
        }}
      />

      {/* アカウントメニュー */}
      <AccountMenu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={menuCloseHandler}
      />
    </Box>
  )
}

export default IconButtonMenu