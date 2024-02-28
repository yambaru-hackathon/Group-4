import { Box, Divider, Menu, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import MenuLabel from '@/drive/components/Header/Buttons/FileAppendButton/MenuLabel'

const AppendMenu = ({
  open,
  onClose,
  anchorEl,
}) => {
  return (
    <Box>
      <Menu
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        sx={{
          ".css-6hp17o-MuiList-root-MuiMenu-list": {
            padding: 0,
            width: "200px"
          },
          fontSize: "14px",
        }}
      >
        {/* 新規作成 */}
        <MenuList dense>
          <MenuLabel label="新規作成" />
          <MenuItem>フォルダ</MenuItem>
          <MenuItem>レポート課題</MenuItem>
          <MenuItem>テスト/テスト課題</MenuItem>
          <MenuItem>Markdown</MenuItem>
          <MenuItem>リンク</MenuItem>
        </MenuList>
        <Divider />

        {/* アップロード */}
        <MenuList dense>
          <MenuLabel label="アップロード" />
          <MenuItem>ファイル</MenuItem>
          <MenuItem>フォルダ</MenuItem>
        </MenuList>
        <Divider />

        {/* ショートカット */}
        <MenuList dense>
          <MenuLabel label="ショートカット" />
          <MenuItem>ファイル</MenuItem>
          <MenuItem>フォルダ</MenuItem>
          <MenuItem>レポート課題</MenuItem>
          <MenuItem>テスト/テスト課題</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default AppendMenu