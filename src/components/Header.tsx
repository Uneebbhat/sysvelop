"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";
import Button from "@/components/ui/button";
import Container from "@/components/Container";
import { Menu, X } from "lucide-react";

interface RoutesProps {
  id: number;
  label: string;
  href: string;
}

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const routes: RoutesProps[] = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "About",
      href: "/about",
    },
    {
      id: 3,
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      id: 4,
      label: "Blogs",
      href: "/blogs",
    },
  ];

  return (
    <>
      <header className="py-[24px] px-[20px] shadow-sm">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  alt="Sysvelop"
                  width={100}
                  height={100}
                  className="w-[80px] md:w-[100px]"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-[40px]">
              {routes.map((route: RoutesProps) => (
                <Link
                  href={route.href}
                  key={route.id}
                  className={`${
                    pathname === route.href ? "text-blue-500" : "text-black"
                  } hover:text-blue-500`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <nav
              className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transition-all duration-300 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="container mx-auto py-8 px-8">
                <div className="flex justify-end mb-8">
                  <button onClick={() => setIsMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col gap-6">
                  {routes.map((route: RoutesProps) => (
                    <Link
                      href={route.href}
                      key={route.id}
                      className={`text-3xl ${
                        pathname === route.href
                          ? "text-blue-500 underline"
                          : "text-black"
                      } hover:text-blue-500 hover:underline`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button className="primary">Let&apos;s talk.</Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
