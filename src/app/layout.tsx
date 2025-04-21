import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sysvelop — End-to-End Software & Digital Solutions Partner",
  description:
    "Sysvelop is a global software solutions company offering UI/UX design, web and mobile app development, custom software, MS Dynamics 365 CRM, cloud applications, game development, SaaS platforms, e-commerce solutions, automation, and ongoing maintenance and support services tailored for modern enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
