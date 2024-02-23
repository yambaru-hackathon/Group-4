import { Box, Toolbar, Typography, AppBar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import conf from "@/serviceConfig.json";
import styles from "@/styles/styles.module.css";
import IconButtonMenu from '@/components/AppBar/IconButtonMenu';

const AppBarDefault = () => {

  return (
    <Box>
      <AppBar position="fixed" elevation={3}>
        <Toolbar>
          {/* サービス名 */}
          <Typography
            variant="h6"
            component="div"
          >
            <Link
              href="/"
              className={styles.linkText}
              style={{
                color: 'white',
              }}
            >
              {conf.serviceName}
            </Link>
          </Typography>

          {/* アイコンメニュー */}
          <Box sx={{
            marginLeft: 'auto', // 右寄せ
          }}>
            <IconButtonMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppBarDefault