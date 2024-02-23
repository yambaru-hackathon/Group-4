import { Box, Button, Divider, Menu, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import AccountHeader from '@/components/Accounts/AccountHeader';
import Link from 'next/link';
import styles from '@/styles/styles.module.css';

const accountMenu = [
  "アカウント情報の確認/変更",
  "アカウント設定",
  "環境設定",
  "ヘルプ",
  "お問い合わせ",
]

const AccountMenu = ({
  anchorEl,
  open,
  onClose,
}) => {
  return (
    <Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        style={{
          minWidth: "max-content",
          maxWidth: "98vw",
        }}
      >
        {/* アカウント情報 */}
        <Box sx={{
          px: 1,
        }}>
          <AccountHeader />
        </Box>
        <Divider />

        {/* 各種メニュー */}
        <MenuList dense sx={{py: .5}}>
          {accountMenu.map((menu, index) => {
            return <MenuItem
              key={index}
              sx={{
                fontSize: "13px",
                color: "gray",
              }}
            >
              {menu}
            </MenuItem>
          })}
        </MenuList>
        <Divider />

        {/* ログアウト */}
        <Box>
          <Button className={styles.accountMenuLogoutButton}>
            ログアウト
          </Button>
        </Box>

        <Divider />

        {/* 各種ポリシー */}
        <Box className={styles.accountMenuPolicyBox}>
          <Link href="/" className={styles.accountMenuPolicy}>
            利用規約
          </Link>
          <Link href="/" className={styles.accountMenuPolicy}>
            プライバシーポリシー
          </Link>
        </Box>
      </Menu>
    </Box>
  )
}

export default AccountMenu