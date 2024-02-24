import { Box, Card, Divider } from '@mui/material'
import React from 'react'
import Styles from "@/styles/styles.module.css";
import CardBottomActionButton from "@/components/Buttons/CardBottomActionButton";

const DashboardCard = ({
  children,
  title = "No Title",
  bottomActionButton = null,
  buttonActionButtonOnClick = null,
}) => {
  return (
    <Box sx={{ height: "100%" }}>
      <Card className={Styles.dashboardCard}>
        {/* タイトル */}
        <Box className={Styles.dashboardCardTitle}>
          {title}
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