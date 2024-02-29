import React from 'react';
import { Box, Button, Divider } from '@mui/material';
import Styles from '@/styles/styles.module.css';

const ScoreCardColumn = ({ title, score }) => {
  return (
    <Box className={Styles.scoreCardColumn}>
      <Box className={Styles.columnValues}>
        <span className={Styles.scoreCardColumnTitle}>{title}</span>
        <Box className={Styles.score_button}>
          <Button variant="text" color="primary">詳細</Button>
          <span>{score}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default ScoreCardColumn;
