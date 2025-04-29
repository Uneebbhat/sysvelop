import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-pulse">
        <Image
          src="/loading-logo.png"
          alt="Sysvelop Logo"
          width={500}
          height={500}
          className="animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default Loading;
