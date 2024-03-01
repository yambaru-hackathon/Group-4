import { redirect } from "next/navigation";

export async function GET(req, {
  params: { courseId },
}) {
  redirect(`/course/${courseId}/resource`);
}