"use client"
import { Box } from '@mui/material'
import { atom, useRecoilState } from 'recoil';
import Styles from "@/styles/styles.module.css";
import ScoreCard from "../../../components/Dashboard/Cards/ScoreCard"
import ScoreDetailCard from '../../../components/Dashboard/Cards/ScoreDetailCard'
import React from 'react'

const Score = () => {

  return (
    <Box className={Styles.toppageDashboard}>
      <Box>
        <ScoreCard />
      </Box>
      <Box>
        <ScoreDetailCard />
      </Box>
    </Box>
  )
}

export default Score