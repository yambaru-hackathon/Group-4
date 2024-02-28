"use client";
import { Box, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import DriveStyle from '@/styles/drive.module.css'
import { useRecoilState } from 'recoil';
import { directoryData } from "@/recoil/Drive/Directory";

const DirNameField = () => {

  // Recoil
  const [{dirName}, setDirData] = useRecoilState(directoryData);

  // State
  const [dirNameChange, setDirNameChange] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [composiing, setComposiing] = useState(false);

  // Ref
  const textfield = useRef(null);


  // Handler
  const changeDirNameHandler = async () => {
    try {
      // 変更があるかを確認
      if (dirName === textfield.current.value) {
        return true;
      }

      // 変更中フラグを立てる
      setIsChanged(true);

      // 変更を反映
      const beforeData = dirName;
      setDirData((e) => {
        return {e, dirName: textfield.current.value}
      });

      // 変更をサーバーに送信
    }catch(e) {
      console.log(e);
    }finally {
      // TextFiledを閉じる
      setDirNameChange(false);
      // 変更中フラグを戻す
      setIsChanged(false);
    }
  }

  return (
    <Box sx={{width: "100%",}}>
      <Box
        display={dirNameChange ? "block" : "none"}
        className={DriveStyle.headerDirectoryTitleTextFieldBox}
      >
        <TextField 
          size='small'
          fullWidth
          inputRef={textfield}
          variant='standard'
          autoComplete='off'
          defaultValue={dirName}
          className={DriveStyle.headerDirectoryTitleTextField}
          disabled={isChanged}
          onBlur={() => changeDirNameHandler()}
          onCompositionStart={() => setComposiing(true)}
          onCompositionEnd={() => setComposiing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !composiing) {
              changeDirNameHandler();
            }
          }}
        />
      </Box>
      <Box
        className={DriveStyle.headerDirectoryTitle}
        display={dirNameChange ? "none" : "block"}
        onClick={() => {
          // 変更が終わっていない場合は何もしない
          if (isChanged) {
            return false;
          }

          setDirNameChange(true);
          setTimeout(() => {
            textfield.current.focus();
            textfield.current.setSelectionRange(dirName.length, dirName.length);
          }, 5);
        }}
      >
        {dirName}
      </Box>
    </Box>
  )
}

export default DirNameField