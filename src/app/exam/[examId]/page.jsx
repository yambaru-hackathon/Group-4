import { Box } from '@mui/material'
import React from 'react'

const Exam = ({
  params
}) => {

  const EXAM_ID = params.examId;

  return (
    <Box>
      テスト実施ページ
      <Box>
        テストID: {EXAM_ID}
      </Box>
    </Box>
  )
}

export default Exam