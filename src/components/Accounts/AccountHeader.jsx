import { Avatar, Box } from '@mui/material'
import React from 'react'

const AccountHeader = () => {
  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minWidth: "max-content",
      }}
    >
      {/* アバター */}
      <Avatar
        alt="ユーザーアイコン"
        src="https://mui.com/static/images/avatar/2.jpg"
        sx={{
          width: 72,
          height: 72,
        }}
      />

      {/* ユーザー名 */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 1,
        }}
      >
        松田 秀彦
      </Box>

      {/* メールアドレス */}
      <Box
        sx={{
          textAlign: 'center',
          fontSize: "12px",
        }}
      >
        hidehiko.matsuda@fan-mily.com
      </Box>
    </Box>
  )
}

export default AccountHeader