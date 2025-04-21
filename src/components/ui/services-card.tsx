import Image from "next/image";
import React, { FC } from "react";

interface ServicesCardProps {
  title: string;
  image: string;
}

const ServicesCard: FC<ServicesCardProps> = ({ title, image }) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg group">
        <div className="absolute top-[20px] left-[20px] z-20">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        <div className="w-full h-[400px] relative">
          <Image
            src={image}
            alt={title}
            fill
            quality={100}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
