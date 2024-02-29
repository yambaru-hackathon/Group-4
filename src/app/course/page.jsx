"use client";
import { Box } from '@mui/material';
import { atom, useRecoilState } from 'recoil';
import React, { useState } from 'react';
import Styles from "@/styles/styles.module.css";
import ScheduleCard from "../../components/Dashboard/Cards/ScheduleCard";
import CourseCard from "../../components/Dashboard/Cards/CourseCard";
import NarrowDownCard from '@/components/Dashboard/Cards/NarrowDownCard';

const Courses = () => {
  const [year, setYear] = useState("2023");
  const [semester, setSemester] = useState("前期");

  const handleFilter = (selectedYear, selectedSemester) => {
    setYear(selectedYear);
    setSemester(selectedSemester);
  };

  return (
    <Box className={Styles.toppageDashboard}>
      <Box>
        <NarrowDownCard handleFilter={handleFilter} />
        <Box sx={{ mt: 2 }}/>
        <CourseCard year={year} semester={semester} />
      </Box>
      <Box>
        <ScheduleCard year={year} semester={semester} />
      </Box>
    </Box>
  );
}

export default Courses