import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Card from "@/components/Dashboard/Cards/Card";
import Styles from "@/styles/styles.module.css";

const emptyTemplate = {
    "title": "国語",
    "score": "70",
}

const EmptyCard = () => {
    return (
        <Box sx={{ height: "100%" }}>
            <Card
                title="科目成績の詳細"
            >
                <Box className={Styles.dashboardCardContent} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Typography variant="body1" color="textSecondary">
                        詳細を確認したい科目を選択してください
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default EmptyCard
