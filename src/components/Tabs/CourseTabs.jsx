"use client";
import { Box, Divider, Tab, Tabs, Link } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import styles from '@/styles/styles.module.css';

const courseMenus = [{
  label: "教材",
  path: (course_id) => `/course/${course_id}/resource`,
},{
  label: "出席",
  path: (course_id) => `/course/${course_id}/attendance`,
},{
  label: "課題",
  path: (course_id) => `/course/${course_id}/task`,
},{
  label: "成績",
  path: (course_id) => `/course/${course_id}/score`,
},{
  label: "チャット",
  path: (course_id) => `/course/${course_id}/chat`,
}];

const CourseTabs = () => {

  const currentPath = usePathname();
  const router = useRouter();
  const course_id = currentPath.match(/\/course\/([^/]+)/)[1];

  return (
    <Box className={styles.coursePageHeaderMenu}>
      <Tabs
        value={currentPath}
        onChange={(e, value) => {
          router.push(value);
        }}
        centered
      >
        {
          courseMenus.map((elm, i) => {
            const path = elm.path(course_id);
            return <Tab
              label={elm.label}
              key={i}
              value={path}
            />})
        }
      </Tabs>
    </Box>
  )
}

export default CourseTabs