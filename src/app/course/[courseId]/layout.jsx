import "@/styles/global.css";
import styles from "@/styles/styles.module.css";
import { Box, Divider } from "@mui/material";
import CourseTabs from "@/components/Tabs/CourseTabs";


export const metadata = {
  title: "テスト教科 | サービス名",
  description: "SEO対策用のディスクリプション",
};


export default function RootLayout({
  children,
  params,
}) {
  const courseName = "テスト教科";

  return (
    <Box className={styles.coursePageRoot}>
      <Box className={styles.coursePageHeader}>
        <Box className={styles.coursePageHeaderCourseName}>{courseName}</Box>
        <CourseTabs course_id={params.course_id} />
      </Box>
      <Divider />
      <Box className={styles.coursePageChildren}>
        {children}
      </Box>
    </Box>
  );
}
