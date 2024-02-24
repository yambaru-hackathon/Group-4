import { Inter } from "next/font/google";
import "@/styles/global.css";
import styles from "@/styles/styles.module.css";
import AppProvider from "@/app/provider";
import AppBar from "@/components/AppBar/AppBar";
import { ThemeProvider } from "@mui/material";
import  theme from "@/components/Theme/theme";


export const metadata = {
  title: "ようこそ | サービス名",
  description: "SEO対策用のディスクリプション",
};



export default function RootLayout({
  children,
}) {
  return (
    <AppProvider>
      <html lang="ja">
      <head>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {/* AppBar */}
          <AppBar />

          {/* Main */}
          <main className={styles.defaultAppBarContent}>
            {children}
          </main>
        </ThemeProvider>
      </body>
      </html>
    </AppProvider>
  );
}
