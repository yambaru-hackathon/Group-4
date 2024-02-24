"use client";
import { createTheme } from "@mui/material";

/*
 * テーマを変更するには
 * import { MuiThemeProvider } from '@material-ui/core/styles'  // 追加
 * import theme from './layout' // 追加（相対アドレスは必要に応じて変更）
 * 
 * //このタグで囲う
 * <MuiThemeProvider theme={theme}>
 *  {children}
 * </MuiThemeProvider>
*/

export default createTheme({
  palette: {
    primary: {
      light: '#bfe0c0',
      main: '#B0D9B1',
      dark: '#7b977b',
      buttonText: "#0288d1",  // ボタンの文字色 (一部)
      alert: "#c90b0b",  // アラートの文字色
      contrastText: '#000000',
    },
    secondary: {
      light: '#99c9ca',
      main: '#80BCBD',
      dark: '#598384',
      contrastText: '#ffffff',
    },
  },
});