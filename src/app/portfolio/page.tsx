import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-black animate-pulse">
          Coming Soon
        </h1>
        <p className="text-xl text-black">
          My awesome portfolio is under construction
        </p>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
