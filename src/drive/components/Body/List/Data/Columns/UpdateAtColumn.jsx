import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import digitChange from '@/functions/digitChange';
import DriveStyles from '@/styles/drive.module.css';

const UpdateAtColumn = ({
  value,
  width,
}) => {

  const [updateAt, setUpdateAt] = useState("----/--/-- --:--:--");


  useEffect(() => {
    if (value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = digitChange(date.getMonth() + 1);
      const day = digitChange(date.getDate());
      const hour = digitChange(date.getHours());
      const minute = digitChange(date.getMinutes());
      const second = digitChange(date.getSeconds());
      setUpdateAt(`${year}/${month}/${day} ${hour}:${minute}:${second}`);
    }
  }, [value]);

  return (
    <Box
     className={DriveStyles.ListViewDataFieldsUpdateAtColumn}
     width={width}
    >
      {/* 更新日時 */}
      {updateAt}
    </Box>
  )
}

export default UpdateAtColumn