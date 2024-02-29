import "@/styles/global.css";
import styles from "@/styles/styles.module.css";
import { Box } from "@mui/material";
import CourseTabs from "@/components/Tabs/CourseTabs";


export const metadata = {
  title: "教科名 | サービス名",
  description: "SEO対策用のディスクリプション",
};


export default function RootLayout({
  children,
  params,
}) {

  return (
    <Box className={null}>
      <CourseTabs course_id={params.course_id} />
      <Box>
        {children}
      </Box>
    </Box>
  );
}
