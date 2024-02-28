import { Box, IconButton } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import FileNameFavorite from "@/drive/components/Body/List/Data/Columns/FileNameFavorite"

const FileNameColumn = ({
  value,
  isLike,
  likeChange = () => {},
  menuClick = () => {},
  width,
  type = "",
  file_type,
}) => {
  return (
    <Box
      className={DriveStyles.ListViewDataFieldsFileNameColumn}
      width={width}
    >
      {/* ファイル名 */}
      <Box className={DriveStyles.ListViewDataFieldsFileNameColumnValue}>
        {value}{ type.toLocaleLowerCase() === "directory" ? "": `.${file_type}` }
      </Box>

      {/* お気に入り */}
      <FileNameFavorite isLike={isLike} onChange={likeChange} />

      {/* メニュー */}
      <Box className={DriveStyles.ListViewDataFieldsFileNameColumnMenuButton}>
        <IconButton
          size='small'
          onClick={menuClick}
        >
          <MoreVertRoundedIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default FileNameColumn