import { Box, Divider } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil';
import { columnFields } from "@/recoil/Drive/Fields";
import DriveStyles from '@/styles/drive.module.css';
import SelectCheckBox from '@/drive/components/Body/List/Field/SelectCheckBox';
import ColumnField from "@/drive/components/Body/List/Field/ColumnField";


const Field = () => {
  const [columns, setColumns] = useRecoilState(columnFields);

  return (
    <Box>
      <Box className={DriveStyles.ListViewFileds}>
        {/* チェックボックス */}
        <SelectCheckBox />

        {/* データカラム */}
        {columns.map((elm, i) => <ColumnField key={i} {...elm} />)}
      </Box>
      
      <Divider />
    </Box>
  )
}

export default Field