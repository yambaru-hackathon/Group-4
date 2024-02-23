"use client";
import { IconButton, Avatar } from '@mui/material';
import React from 'react'

/**
 * AvatarButton
 * @param {{
 *  onClick: function
 * }}
 * @returns React.ReactElement
 */
const AvatarButton = ({
  onClick = () => {},
}) => {
  return (
    <IconButton
      onClick={onClick}
    >
      <Avatar
        alt="ユーザーアイコン"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
    </IconButton>
  )
}

export default AvatarButton