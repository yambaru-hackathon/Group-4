"use client";
import { Box, Divider } from '@mui/material';
import { atom, useRecoilState } from 'recoil';
import Styles from "@/styles/styles.module.css";
import Alerts from "@/app/_alert";
import TodayScheduleCard from "@/components/Dashboard/Cards/TodayScheduleCard";
import TasksCard from "@/components/Dashboard/Cards/TasksCard";


export default function Page() {

  return <Box sx={{mx: 3}}>
    {/* ヘッダー部分 */}
    <Box sx={{mt: 3}}>
      <Box className={Styles.toppageHeaderText}>
        <Box>松田秀彦</Box>さん、こんにちは。
      </Box>
      <Divider />
    </Box>

    {/* アラート */}
    <Box>
      <Alerts />
    </Box>

    {/* カード */}
    <Box className={Styles.toppageDashboard}>
      <Box>
        <TodayScheduleCard />
      </Box>
      <Box>
        <TasksCard />
      </Box>
    </Box>

  </Box>
}
