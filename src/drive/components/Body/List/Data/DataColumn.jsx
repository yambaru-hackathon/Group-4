import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'
import DriveStyles from '@/styles/drive.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { columnFields } from "@/recoil/Drive/Fields";
import SelectedCheckBox from "@/drive/components/Body/List/Data/Columns/SelectedCheckBox"
import FileNameColumn from "@/drive/components/Body/List/Data/Columns/FileNameColumn"
import UpdateAtColumn from "@/drive/components/Body/List/Data/Columns/UpdateAtColumn"
import UpdateUserColumn from "@/drive/components/Body/List/Data/Columns/UpdateUserColumn"
import FileTypeColumn from "@/drive/components/Body/List/Data/Columns/FileTypeColumn"
import FileSizeColumn from "@/drive/components/Body/List/Data/Columns/FileSizeColumn"
import ItemMenu from "@/drive/components/Body/List/Data/Menu/ItemMenu";
import { selectItems } from '@/recoil/Drive/Items';
import FileTypeIcon from '@/drive/components/Body/List/Data/Columns/FileTypeIcon';

const DataColumn = ({
  uid = null,
  file_name = "ファイル名",
  update_user = "更新者名",
  update_at = "2024-02-25T13:47:38.605Z",
  type = "",
  file_type = "不明",
  file_size = "不明",
  isLike = false,
}) => {
  const columns = useRecoilValue(columnFields);
  const [selects , setSelectItems] = useRecoilState(selectItems);

  // ReactState
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menuTargetElm, setMenuTargetElm] = useState(null);

  // Handlers
  const handleLikeChange = (e) => {
    e.stopPropagation();
  }

  const menuOpenHandler = (e) => {
    e.stopPropagation();
    // セレクトを有効化
    setMenuTargetElm(e.currentTarget);
    setIsOpenMenu(true);
  }

  const selectChangeHandler = (e) => {
    e.stopPropagation();
    const indexNum = selects.findIndex(elm => elm.uid === uid && elm.type === type);

    if (e.target.checked) {
      // アイテムを追加

      // すでに選択されているかを確認
      if (indexNum !== -1) {
        return;
      }

      // 追加
      setSelectItems((b) => {
        return [...b, {uid, type}];
      });
    }else {
      // アイテムを削除
      setSelectItems((b) => {
        return b.toSpliced(indexNum, 1);
      })
    }
  }

  return (
    <Box>
      <Box
        className={
          `${isOpenMenu
            ? DriveStyles.ListViewDataFieldsMenuOpen
            : DriveStyles.ListViewDataFields} 
          ${selects.some(elm => elm.uid === uid && elm.type === type)
            ? DriveStyles.ListViewDataFieldsSelected
            : ""
          }`
        }
        onClick={(e) => {
          setSelectItems([{uid, type}]);
        }}
      >
        {/* チェックボックス */}
        <SelectedCheckBox
          selected={selects.some(elm => elm.uid === uid && elm.type === type)}
          onChange={selectChangeHandler}
        />

        {/* アイコン */}
        <FileTypeIcon
          type={type}
          file_type={file_type}
          width={columns.find(elm => elm.fieldId === "icon")?.width}
        />

        {/* ファイル名 */}
        <FileNameColumn
          value={file_name}
          isLike={isLike}
          type={type}
          file_type={file_type}
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
          value={file_type}
          type={type}
          width={columns.find(elm => elm.fieldId === "file_type")?.width}
        />

        {/* ファイルサイズ */}
        <FileSizeColumn
          value={file_size}
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