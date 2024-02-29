import { Box, Divider, Menu, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';

const columnMenus = [{
  columnName: "ファイルの編集",
},{
  columnName: "Divider",
},{
  columnName: "ダウンロード",
},{
  columnName: "ショートカットの作成",
},{
  columnName: "共有",
},{
  columnName: "リンクのコピー",
},{
  columnName: "Divider",
},{
  columnName: "削除",
},{
  columnName: "Divider",
},{
  columnName: "移動",
},{
  columnName: "コピー",
},{
  columnName: "名前の変更",
},{
  columnName: "Divider",
},{
  columnName: "権限の管理",
},{
  columnName: "プロパティ",
},]

const ItemMenu = ({
  targetElm,
  open = false,
  onClose = () => {},
}) => {
  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={targetElm}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      sx={{minWidth: 200,".css-6hp17o-MuiList-root-MuiMenu-list": { paddingY: 0 }}}
    >

      {/* カラムメニュー */}
      <MenuList
        dense
        className={DriveStyles.ListViewDataFieldsFileNameColumnMenuList}
        sx={{ paddingY: 0,}}
      >
        {
          columnMenus.map((elm, i) => {
            return (elm.columnName === "Divider")
              ? <Box aria-hidden="true" key={i}><Divider /></Box>
              : <MenuItem
                key={i}
              >{elm.columnName}</MenuItem>
          })
        }
      </MenuList>
    </Menu>
  )
}

export default ItemMenu