import { Box, Card, Divider } from '@mui/material'
import React from 'react'
import Styles from "@/styles/styles.module.css";
import CardBottomActionButton from "@/components/Buttons/CardBottomActionButton";

const DashboardCard = ({
  children,
  title = "No Title",
  subTitle = "No SubTitle",
  bottomActionButton = null,
  buttonActionButtonOnClick = null,
}) => {
  return (
    <Box sx={{ height: "100%" }}>
      <Card className={Styles.dashboardCard}>
        {/* タイトル */}
        <Box>
          <Box className={Styles.dashboardCardSubTitle}>
            {subTitle}
          </Box>
          <Box className={Styles.dashboardCardTitle}>
            {title}
          </Box>
        </Box>
        <Divider />

        {/* Body */}
        <Box sx={{ flexGrow: 1,}}>
          {children}
        </Box>

        {/* BottomActionButton */}
        {
          (bottomActionButton)
            ? <CardBottomActionButton
              label={bottomActionButton}
              onClick={buttonActionButtonOnClick}
            />
            : null
        }
      </Card>
    </Box>
  )
}

export default DashboardCard