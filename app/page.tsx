import { redirect } from "next/navigation";
import { defaultLanguage } from "@/components/landing/content";

export default function RootPage() {
  redirect(`/${defaultLanguage}`);
}
