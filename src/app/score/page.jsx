"use client"
import { Box } from '@mui/material'
import { atom, useRecoilState } from 'recoil';
import Styles from "@/styles/styles.module.css";
import ScoreCard from '../../components/Dashboard/Cards/ScoreCard'
import EmptyCard from '../../components/Dashboard/Cards/EmptyCard'
import React from 'react'

const Scores = () => {

  return (
    <Box className={Styles.toppageDashboard}>
      <Box>
        <ScoreCard />
      </Box>
      <Box>
        <EmptyCard />
      </Box>
    </Box>
  )
}

export default Scores