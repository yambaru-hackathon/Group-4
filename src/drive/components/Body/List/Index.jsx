"use client";
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Field from './Field/Field';
import DriveStyles from '@/styles/drive.module.css';
import DataField from '@/drive/components/Body/List/Data/Data';

const ListView = () => {

  return (
    <Box className={DriveStyles.ListView}>
      {/* リスト */}
      <Field />

      {/* リストデータ */}
      <DataField />
    </Box>
  )
}

export default ListView