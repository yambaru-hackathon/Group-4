import { Box, Divider } from '@mui/material'
import React, { useState } from 'react';
import Card from "@/components/Dashboard/Cards/Card";
import ScoreCardColumn from "@/components/Dashboard/Columns/ScoreCardColmn"
import Styles from "@/styles/styles.module.css";

const scoreTemplate = [{
  "title": "国語",
  "score": "70",
}, {
  "title": "微積分Ⅱ",
  "score": "89",
}, {
  "title": "地理学概論",
  "score": "80"
}, {
  "title": "ECPⅢ",
  "score": "90",
},]

const ScoreCard = () => {
  const [score, setScore] = useState(scoreTemplate);

  return (
    <Box sx={{ height: "100%", position: 'relative' }}>
      <Card title="各科目成績一覧">
        <Box className={Styles.scorePage}>
          {score.map(({ title, score }, i) => (
            <React.Fragment key={i}>
              {i !== 0 && <Divider />}
              <ScoreCardColumn title={title} score={score} />
            </React.Fragment>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default ScoreCard