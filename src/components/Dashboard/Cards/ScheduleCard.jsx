import { Box, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import Styles from "@/styles/styles.module.css";

const scheduleTemplate = [{
    "title": "国語",
    "year": "2023",
    "semester": "前期",
    "day": "月",
    "period": "1限"
}, {
    "title": "微積分Ⅱ",
    "year": "2023",
    "semester": "前期",
    "day": "火",
    "period": "2限"
}, {
    "title": "地理学概論",
    "year": "2023",
    "semester": "後期",
    "day": "水",
    "period": "3限"
}, {
    "title": "ECPⅢ",
    "year": "2023",
    "semester": "通年",
    "day": "木",
    "period": "4限"
},]
const daysOfWeek = ['月', '火', '水', '木', '金'];
const periods = ['1限', '2限', '3限', '4限', '5限'];

const ScheduleCard = ({ year, semester }) => {
    const filteredSchedule = useMemo(() => {
      return scheduleTemplate.filter(item => item.year === year && item.semester === semester);
    }, [year, semester]);
  
    return (
      <Box sx={{ height: "100%" }}>
        <Card title="時間割">
          <div className={Styles.scheduleGrid}>
            <div className={Styles.emptyCell}></div>
            {daysOfWeek.map(day => (
              <div key={day} className={Styles.columnHeader}>
                <Typography variant="body2">{day}</Typography>
              </div>
            ))}
            {periods.map(period => (
              <React.Fragment key={period}>
                <div className={Styles.rowHeader}>
                  <Typography variant="body2">{period}</Typography>
                </div>
                {daysOfWeek.map(day => (
                  <div key={`${day}-${period}`} className={Styles.cell}>
                    {filteredSchedule.find(item => item.day === day && item.period === period)?.title}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </Card>
      </Box>
    );
  };

export default ScheduleCard
