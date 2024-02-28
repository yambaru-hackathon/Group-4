import { Box, IconButton } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

const FileNameFavorite = ({
  isLike,
  onChange = () => {},
}) => {
  return (
    <Box
      className={`${
        isLike
          ? DriveStyles.ListViewDataFieldsFileNameColumnLikeButtonLiked
          : DriveStyles.ListViewDataFieldsFileNameColumnLikeButton
      }`}
    >
      <IconButton
        size='small'
        onClick={onChange}
      >
        {
          isLike
            ? <GradeIcon fontSize='inherit' />
            : <GradeOutlinedIcon fontSize='inherit' />
        }
      </IconButton>
    </Box>
  )
}

export default FileNameFavorite