import PageLayout from "@/layout/PageLayout";
import { ReactNode } from "react";

interface PortfolioLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: PortfolioLayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
