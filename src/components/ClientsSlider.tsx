"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const ClientsSlider = () => {
  const clients = [
    { name: "Service", img: "/service.png" },
    { name: "Bata", img: "/bata.png" },
    { name: "Khaadi", img: "/khaadi.png" },
    { name: "MakkiTV", img: "/mk-tv.png" },
    { name: "Edhi Foundation", img: "/edhi.png" },
    { name: "Cart", img: "/cart.png" },
  ];

  // Double the clients array for seamless looping
  const allClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 overflow-hidden bg-white">
      <div className="container mx-auto mb-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {allClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex-shrink-0 mx-8">
              {/* Fixed dimensions for all images */}
              <div className="w-32 h-20 relative">
                <Image
                  src={client.img}
                  alt={`${client.name} logo`}
                  width={128}
                  height={80}
                  style={{
                    objectFit: "contain",
                    width: "100px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
