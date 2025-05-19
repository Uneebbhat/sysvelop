import React from "react";

const Portfolio = () => {
  const images = [1, 2, 3, 4, 5, 6].map((num) => `/portfolio/${num}.jpg`);

  return (
    <div className="min-h-screen py-16 px-8 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
