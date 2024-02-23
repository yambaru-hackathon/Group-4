import AppProvider from "./provider";
import AppBar from "@/components/AppBar/AppBar";
import styles from "@/styles/styles.module.css";


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
