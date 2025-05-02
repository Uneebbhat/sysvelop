import Image from "next/image";

const PartnersSlider = () => {
  const clients = [
    { name: "Oracle", img: "/oracle.png" },
    { name: "Java", img: "/java.png" },
    { name: "MicroSoft", img: "/microsoft.png" },
    { name: "Godaddy", img: "/godaddy.png" },
    { name: "Hostinger", img: "/hostinger.png" },
    { name: "Namecheap", img: "/namecheap.png" },
    { name: "Dell Technologies", img: "/dell-tech.png" },
    { name: "Hp", img: "/hp.png" },
    { name: "Linux", img: "/linux.png" },
  ];

  const allClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 overflow-hidden bg-white">
      <div className="container mx-auto mb-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Partners</h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee items-center justify-center">
          {allClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex-shrink-0 mx-8">
              {/* Fixed dimensions for all images, centered */}
              <div className="w-32 h-20 flex items-center justify-center bg-white relative">
                <Image
                  src={client.img}
                  alt={`${client.name} logo`}
                  width={128}
                  height={80}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    display: "block",
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

export default PartnersSlider;
