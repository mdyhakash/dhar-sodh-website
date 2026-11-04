import { redirect } from "next/navigation";

export default function RootPage() {
  // Static export redirects
  redirect("/bn");
}
