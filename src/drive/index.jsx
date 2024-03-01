import { Box } from '@mui/material'
import React from 'react'
import Header from '@/drive/components/Header/Header.jsx'
import DriveStyle from '@/styles/drive.module.css'
import ListView from '@/drive/components/Body/List/Index'


const getDirectoryData = async (directory_id) => {
  const response = await fetch(`http://localhost:3000/api/drive/${directory_id}`, {
    next: {
      revalidate: 10,
    }
  });
  return await response.json();
}

const Drive = async ({
  title,
}) => {

  // データ取得
  const directoryData = await getDirectoryData();

  return (
    <Box className={DriveStyle.root}>
      {/* ヘッダー */}
      <Header
        directoryData={directoryData}
      />

      {/* コンテンツ部分 */}
      <Box className={DriveStyle.mainContent}>
        {/* リスト表示 */}
        <ListView />
      </Box>
    </Box>
  )
}

export default Drive