import "@/styles/global.css";
import styles from "@/styles/styles.module.css";
import { Box, Divider } from "@mui/material";
import CourseTabs from "@/components/Tabs/CourseTabs";


export const metadata = {
  title: "教科名 | サービス名",
  description: "SEO対策用のディスクリプション",
};


export default function RootLayout({
  children,
  params,
}) {
  const courseName = "教科名";

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
