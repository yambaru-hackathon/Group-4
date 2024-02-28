import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import digitChange from '@/functions/digitChange';
import DriveStyles from '@/styles/drive.module.css';

const generateDateString = (value) => {
  if (value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = digitChange(date.getMonth() + 1);
    const day = digitChange(date.getDate());
    const hour = digitChange(date.getHours());
    const minute = digitChange(date.getMinutes());
    const second = digitChange(date.getSeconds());
    return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  }
}

const UpdateAtColumn = ({
  value,
  width,
}) => {
  
  return (
    <Box
     className={DriveStyles.ListViewDataFieldsUpdateAtColumn}
     width={width}
    >
      {/* 更新日時 */}
      {generateDateString(value)}
    </Box>
  )
}

export default UpdateAtColumn