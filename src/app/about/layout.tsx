import PageLayout from "@/layout/PageLayout";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: AboutLayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
