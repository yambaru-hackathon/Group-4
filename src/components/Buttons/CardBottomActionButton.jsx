import { Box, Divider } from '@mui/material'
import React from 'react'
import Styles from "@/styles/styles.module.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CardBottomActionButton = ({
  label,
  onClick,
}) => {
  return (
    <Box>
      <Divider />
      <Box
        className={Styles.cardBottomButton}
        sx={{ color: "primary.buttonText",}}
      >
        {/* ラベル */}
        <Box
          onClick={onClick}
          className="target"
        >
          {label}
        </Box>

        {/* 矢印 */}
        <KeyboardArrowRightIcon />
      </Box>
    </Box>
  )
}

export default CardBottomActionButton