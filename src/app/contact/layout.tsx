import PageLayout from "@/layout/PageLayout";
import { ReactNode } from "react";

interface ContactLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ContactLayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
