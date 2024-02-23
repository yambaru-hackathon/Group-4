"use client";
import { Box, Button, Divider } from '@mui/material';
import { atom, useRecoilState } from 'recoil';
import Styles from "@/styles/styles.module.css";
import Alerts from "@/app/_alert";



export default function Page() {

  return <Box sx={{mx: 3}}>
    {/* ヘッダー部分 */}
    <Box sx={{mt: 3}}>
      <Box className={Styles.toppageHeaderText}>
        <Box>松田英彦</Box>さん、こんにちは。
      </Box>
      <Divider />
    </Box>

    {/* アラート */}
    <Box>
      <Alerts />
    </Box>

    {/* カード */}
    <Box></Box>

  </Box>
}
