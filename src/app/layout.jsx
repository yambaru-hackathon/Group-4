import { Inter } from "next/font/google";
import "./globals.css";


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
        {/* AppBar */}
        <AppBar />

        {/* Main */}
        <main className={styles.defaultAppBarContent}>
          {children}
        </main>
      </body>
      </html>
    </AppProvider>
  );
}

/*テーマを変更するには
import {MuiThemeProvider} from '@material-ui/core/styles' //追加
import {theme} from './layout'//追加（相対アドレスは必要に応じて変更）
//このタグで囲う
<MuiThemeProvider theme={theme}></MuiThemeProvider>
*/
export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bfe0c0',
      main: '#B0D9B1',
      dark: '#7b977b',
      contrastText: '#000000',
    },
    secondary: {
      light: '#99c9ca',
      main: '#80BCBD',
      dark: '#598384',
      contrastText: '#ffffff',
    },
  },
})
