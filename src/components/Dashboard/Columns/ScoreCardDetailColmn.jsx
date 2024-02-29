import React from 'react';
import { Box } from '@mui/material';
import Styles from '@/styles/styles.module.css';

const ScoreCardDetailColumn = ({ title, score }) => {
    const scoreStyle = parseInt(score) <= 59 ? Styles.redScore : '';

    return (
        <Box className={`${Styles.scoreCardColumn} ${scoreStyle}`}>
          <Box className={Styles.columnValues}>
            <span className={Styles.scoreCardColumnTitle}>{title}</span>
            <Box className={Styles.score_button}>
              <span>{score}</span>
            </Box>
          </Box>
        </Box>
      );
};

export default ScoreCardDetailColumn;
