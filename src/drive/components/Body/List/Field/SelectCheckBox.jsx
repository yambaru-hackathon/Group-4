import { directoryItems, selectItems } from '@/recoil/Drive/Items';
import { Box, Checkbox } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';

const SelectCheckBox = () => {

  // Recoil
  const [selected, setSelectItems] = useRecoilState(selectItems);
  const dirItems = useRecoilValue(directoryItems);


  return (
    <Box>
      <Checkbox
        checked={selected.length === dirItems.length}
        indeterminate={selected.length > 0 && selected.length < dirItems.length}
        onChange={(e) => {
          const checked = e.target.checked;
          
          if (checked) {
            setSelectItems(dirItems.map((elm) => {
              return {uid: elm.uid, type: elm.type}
            }));
          }else{
            setSelectItems([]);
          }
        }}
        size='small'
      />
    </Box>
  )
}

export default SelectCheckBox