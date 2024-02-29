import React from 'react';
import { Box, Button, Divider } from '@mui/material';
import Styles from '@/styles/styles.module.css';

const CourseCardColumn = ({ title }) => {
  return (
    <Box className={Styles.courseCardColumn}>
      <Box className={Styles.columnValues}>
        <span className={Styles.courseCardColumnTitle}>{title}</span>
        <Box className={Styles.course_button}>
          <Button variant="text" color="primary">詳細</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCardColumn;
