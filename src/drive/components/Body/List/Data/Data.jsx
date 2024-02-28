import { Box } from '@mui/material'
import React from 'react'
import DriveStyles from '@/styles/drive.module.css';
import DataColumn from '@/drive/components/Body/List/Data/DataColumn';
import { useRecoilValue } from 'recoil';
import { directoryItems } from "@/recoil/Drive/Items";

const Data = () => {

  const items = useRecoilValue(directoryItems);

  return (
    <Box>
      {
        items.map((item, i) => {
          return (
            <DataColumn
              key={i}
              type={item.type}
              uid={item.uid}
              file_name={item.name}
              update_user={item.update_user.user_name}
              update_at={item.update_at}
              file_size={item.file_size}
              file_type={item.file_type}
              isLike={item.isLike}
            />
          );
        })
      }
    </Box>
  )
}

export default Data