import { Box, Divider } from '@mui/material'
import React, {useState} from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import ScoreCardDetailColumn from "@/components/Dashboard/Columns/ScoreCardDetailColmn"
import Styles from "@/styles/styles.module.css";

const scoreDetailTemplate = [{
    "title": "〜についての小論文",
    "score": "56",
}, {
    "title": "第9回 演習問題",
    "score": "89",
},]

const ScoreDetailCard = () => {
    const [scoreDetail, setScoreDetail] = useState(scoreDetailTemplate);

    return (
        <Box sx={{ height: "100%", position: 'relative' }}>
            <Card title="国語の成績詳細">
                <Box className={Styles.scorePage}>
                    {scoreDetail.map(({ title, score }, i) => (
                        <React.Fragment key={i}>
                            {i !== 0 && <Divider />}
                            <ScoreCardDetailColumn title={title} score={score} />
                        </React.Fragment>
                    ))}
                </Box>
            </Card>
        </Box>
    )
}

export default ScoreDetailCard
