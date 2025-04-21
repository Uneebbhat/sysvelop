import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <>
      <footer className="bg-black text-white p-[20px] md:p-[80px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {/* Logo and Tagline Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">
                  <Link href={"/"}>
                    <Image
                      src={"/logo-white.png"}
                      alt="Sysvelop"
                      width={250}
                      height={250}
                      quality={100}
                    />
                  </Link>
                </span>
              </div>
              <p className="max-w-xs">
                We engineer digital futures through innovative technology
                solutions.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="#achievements"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Achievements
                </Link>
                <Link
                  href="#team-members"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Team
                </Link>
                <Link
                  href="#contact-form"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <div className="space-y-2">
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Mobile App Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  UI/UX Design
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Website Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Custom Software Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  MS D365 CRM
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Cloud Application Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Game Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  SaaS Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  E-commerce Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Design & Development
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Maintenance & Support
                </Link>
                <Link
                  href="#our-services"
                  className="block hover:text-gray-300 transition-colors"
                >
                  Automation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
