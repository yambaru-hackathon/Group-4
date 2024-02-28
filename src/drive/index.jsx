import { Box } from '@mui/material'
import React from 'react'
import Header from '@/drive/components/Header/Header.jsx'
import DriveStyle from '@/styles/drive.module.css'
import ListView from '@/drive/components/Body/List/Index'

const Drive = () => {
  return (
    <Box className={DriveStyle.root}>
      {/* ヘッダー */}
      <Header />

      {/* コンテンツ部分 */}
      <Box className={DriveStyle.mainContent}>
        {/* リスト表示 */}
        <ListView />
      </Box>
    </Box>
  )
}

export default Drive