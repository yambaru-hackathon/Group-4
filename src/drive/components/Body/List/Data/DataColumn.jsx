import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'
import DriveStyles from '@/styles/drive.module.css';
import { useRecoilValue } from 'recoil';
import { columnFields } from "@/recoil/Drive/Fields";
import SelectedCheckBox from "@/drive/components/Body/List/Data/Columns/SelectedCheckBox"
import FileNameColumn from "@/drive/components/Body/List/Data/Columns/FileNameColumn"
import UpdateAtColumn from "@/drive/components/Body/List/Data/Columns/UpdateAtColumn"
import UpdateUserColumn from "@/drive/components/Body/List/Data/Columns/UpdateUserColumn"
import FileTypeColumn from "@/drive/components/Body/List/Data/Columns/FileTypeColumn"
import FileSizeColumn from "@/drive/components/Body/List/Data/Columns/FileSizeColumn"
import ItemMenu from "@/drive/components/Body/List/Data/Menu/ItemMenu";

const DataColumn = ({
  file_name = "ファイル名",
  update_user = "更新者名",
  update_at = "2024-02-25T13:47:38.605Z",
}) => {
  const columns = useRecoilValue(columnFields);

  // ReactState
  const [isSelected, setIsSelected] = useState(false);
  const [isLike, setIsLike] = useState(false);  // お気に入り
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menuTargetElm, setMenuTargetElm] = useState(null);

  // Handlers
  const handleLikeChange = () => {
    setIsLike(!isLike);
  }

  const menuOpenHandler = (e) => {
    // セレクトを有効化
    setMenuTargetElm(e.currentTarget);
    setIsOpenMenu(true);
  }

  return (
    <Box>
      <Box className={
        isOpenMenu
          ? DriveStyles.ListViewDataFieldsMenuOpen
          : DriveStyles.ListViewDataFields
      }>
        {/* チェックボックス */}
        <SelectedCheckBox />

        {/* ファイル名 */}
        <FileNameColumn
          value={file_name}
          isLike={isLike}
          likeChange={handleLikeChange}
          menuClick={menuOpenHandler}
          width={columns.find(elm => elm.fieldId === "name")?.width}
        />

        {/* 更新者 */}
        <UpdateUserColumn
          value={update_user}
          width={columns.find(elm => elm.fieldId === "update_user")?.width}
        />

        {/* 更新日時 */}
        <UpdateAtColumn
          value={update_at}
          width={columns.find(elm => elm.fieldId === "update_at")?.width}
        />

        {/* ファイル種類 */}
        <FileTypeColumn
          value={"テキストファイル"}
          width={columns.find(elm => elm.fieldId === "file_type")?.width}
        />

        {/* ファイルサイズ */}
        <FileSizeColumn
          value={"1.5MB"}
          width={columns.find(elm => elm.fieldId === "file_size")?.width}
        />
      </Box>

      {/* メニュー */}
      <ItemMenu
        targetElm={menuTargetElm}
        open={isOpenMenu}
        onClose={() => setIsOpenMenu(false)}
      />
      <Divider />
    </Box>
  )
}

export default DataColumn