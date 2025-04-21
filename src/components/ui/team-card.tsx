import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface TeamCardProps {
  id: number;
  image: string;
  name: string;
  role: string;
  linkedin: string;
}

const TeamCard: FC<TeamCardProps> = ({ id, image, name, role, linkedin }) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg group transform transition duration-300 hover:-translate-y-2 hover:shadow-xl w-[300px] h-[550px]"
      key={id}
    >
      <div className="w-full h-[450px] relative">
        <Image
          src={image}
          alt={name}
          fill
          quality={100}
          sizes="300px"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div>
          <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-300 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-blue-200 font-medium mb-4">{role}</p>

          <div className="flex justify-between items-center">
            <div className="h-1 w-12 bg-blue-400 rounded group-hover:w-20 transition-all duration-300"></div>
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
