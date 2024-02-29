"use client";
import { Box, Divider, Tab, Tabs, Link } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const courseMenus = [{
  label: "コーストップ",
  path: (course_id) => `/course/${course_id}`,
},{
  label: "出席",
  path: (course_id) => `/course/${course_id}/attendance`,
},{
  label: "教材",
  path: (course_id) => `/course/${course_id}/resource`,
},{
  label: "課題",
  path: (course_id) => `/course/${course_id}/task`,
},{
  label: "成績",
  path: (course_id) => `/course/${course_id}/score`,
}];

const CourseTabs = () => {

  const currentPath = usePathname();
  const router = useRouter();
  const course_id = currentPath.match(/\/course\/([^/]+)/)[1];

  return (
    <Box>
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
      <Divider />
    </Box>
  )
}

export default CourseTabs