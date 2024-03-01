import { Box, Divider } from '@mui/material'
import React from 'react'
import DriveStyle from '@/styles/drive.module.css'
import FileDisplayTypeToggle from '@/drive/components/Header/Buttons/FileDisplayTypeToggle/FileDisplayTypeToggle.jsx'
import InfoButton from '@/drive/components/Header/Buttons/InfoButton.jsx'
import FileAppendButton from '@/drive/components/Header/Buttons/FileAppendButton/FileAppendButton.jsx'
import CreateShortcutButton from '@/drive/components/Header/Buttons/CreateShortcutButton.jsx'
import DirNameField from '@/drive/components/Header/TextField/DirNameField.jsx'
import LinkCopyButton from '@/drive/components/Header/Buttons/LinkCopyButton.jsx';

const Header = ({
  directoryData,
}) => {
  return (
    <Box>
      <Box className={DriveStyle.headerTop}>
        <Box className={DriveStyle.headerTopLeft}>
          {/* 教科名・ディレクトリ名 */}
          <DirNameField
            directoryData={directoryData}
          />
        </Box>

        <Box  className={DriveStyle.headerTopRight}>
          {/* ファイル表示形式 */}
          <FileDisplayTypeToggle />

          {/* Infoボタン */}
          <InfoButton />
        </Box>
      </Box>

      <Divider />

      {/* Functions */}
      <Box className={DriveStyle.headerBottom}>
        {/* 左サイド */}
        <Box  className={DriveStyle.headerBottomLeft}>
          {/* 新規作成 */}
          <FileAppendButton />
          {/* ショートカットの作成 */}
          <LinkCopyButton />
          {/* ショートカットの作成 */}
          <CreateShortcutButton />
        </Box>
        {/* 右サイド */}
      </Box>

      <Divider />
    </Box>
  )
}

export default Header