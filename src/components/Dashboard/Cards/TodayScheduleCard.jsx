import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import ScheduleCardColumn from "@/components/Dashboard/Columns/ScheduleCardColumn";
import Styles from "@/styles/styles.module.css";

const todaysScheduleTemplate = [{
  "start_time": "2024-03-01T23:50:00.000Z",
  "end_time": "2024-03-02T01:20:00.000Z",
  "label": ["授業"],
  "title": "計測工学",
},{
  "start_time": "2024-03-01T01:30:00.000Z",
  "end_time": "2024-03-02T03:00:00.000Z",
  "label": ["授業"],
  "title": "微積分Ⅱ",
},{
  "start_time": "2024-03-01T03:30:00.000Z",
  "end_time": "2024-03-02T04:00:00.000Z",
  "label": ["MTG"],
  "title": "高専祭定例会議",
},{
  "start_time": "2024-03-01T05:50:00.000Z",
  "end_time": "2024-03-02T07:20:00.000Z",
  "label": ["授業"],
  "title": "微積分Ⅱ",
},]

const TodayScheduleCard = () => {
  const [todaysChedule, setTodaysChedule] = useState(todaysScheduleTemplate);

  return (
    <Box sx={{height: "100%"}}>
      <Card
        title="今日のスケジュール"
        bottomActionButton="詳細"
        buttonActionButtonOnClick={() => {console.log("clicked")}}
      >
        <Box className={Styles.dashboardCardContent}>
          {
            todaysChedule.map(({
              title,
              start_time,
              end_time,
              label,
            }, i) => <Box
              key={i}
            >
              {/* カラム */}
              <ScheduleCardColumn
                title={title}
                start_time={start_time}
                end_time={end_time}
                labels={label}
              />

              {/* ライン */}
              <Divider />
            </Box>)
          }
        </Box>
      </Card>
    </Box>
  )
}

export default TodayScheduleCard