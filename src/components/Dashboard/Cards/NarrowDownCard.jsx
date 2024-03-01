import { Box, Typography, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import Card from "@/components/Dashboard/Cards/Card";

const NarrowDownCard = ({ handleFilter }) => {
    const [year, setYear] = useState("2023");
    const [semester, setSemester] = useState("前期");
  
    const handleYearChange = (event) => {
      const selectedYear = event.target.value;
      setYear(selectedYear);
      handleFilter(selectedYear, semester);
    };
  
    const handleSemesterChange = (event) => {
      const selectedSemester = event.target.value;
      setSemester(selectedSemester);
      handleFilter(year, selectedSemester);
    };
  
    return (
      <Box sx={{ width: "100%", position: 'relative' }}>
        <Card title="表示する範囲">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ marginLeft: '16px' }}>年度:</Typography>
            <Select
              value={year}
              onChange={handleYearChange}
              sx={{ ml: 1 }}
            >
              <MenuItem value="2023">2023</MenuItem>
            </Select>
            <Typography variant="body2" sx={{ ml: 2 }}>前後期:</Typography>
            <Select
              value={semester}
              onChange={handleSemesterChange}
              sx={{ ml: 1 }}
            >
              <MenuItem value="前期">前期</MenuItem>
              <MenuItem value="後期">後期</MenuItem>
              <MenuItem value="通年">通年</MenuItem>
            </Select>
          </Box>
        </Card>
      </Box>
    );
  };

export default NarrowDownCard;
