import PageLayout from "@/layout/PageLayout";
import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: BlogLayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
