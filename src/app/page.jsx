"use client";
import { Box, Button } from '@mui/material';
import { atom, useRecoilState } from 'recoil';

const counter = atom({
  key: "count",
  default: 0,
});


export default function Page() {
  const [count, setCount] = useRecoilState(counter);

  return <Box>
    <Box>
      カウンター: {count}
    </Box>
    <Box>
      <Button variant='contained' onClick={() => {
        setCount(count + 1);
      }}>
        +
      </Button>
    </Box>
  </Box>
}
