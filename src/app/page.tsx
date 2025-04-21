import Button from "@/components/ui/button";
import ServicesCard from "@/components/ui/services-card";
import TeamCard from "@/components/ui/team-card";
import services from "@/data/services.json";
import team from "@/data/team.json";
import ContactForm from "@/components/ContactForm";

interface TeamCardProps {
  id: number;
  image: string;
  name: string;
  role: string;
  linkedin: string;
}

export default function Home() {
  return (
    <>
      <main className="text-center min-h-[calc(100vh-96px)] flex flex-col items-center justify-center px-[20px] md:px-[80px] container mx-auto">
        <h1 className="font-bold leading-tight text-[clamp(3rem,10vw,5rem)]">
          WE ENGINEER
          <br />
          DIGITAL FUTURES
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] max-w-full md:max-w-[600px] mt-4">
          Sysvelop is a boundary-pushing tech & design collective transforming
          visions into world-class digital products.
        </p>
      </main>

      <section id="our-services" className="bg-[#F6F6F6] p-[20px] md:p-[80px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[10px]">
            <p className="text-blue-500">OUR SERVICES</p>
            <h2 className="text-[40px] font-bold">Transform Your Business</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="p-[20px] md:p-[80px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-[40px] md:gap-[20px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <p className="text-blue-500">OUR SERVICES</p>
              <h2 className="text-[40px] font-bold">
                Sysvelop&apos;s Achievements
              </h2>
              <p>
                We take pride in empowering businesses worldwide with innovative
                solutions.
              </p>
            </div>
            <div>
              <Button className="primary">Get in touch</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-[40px]">
            <div>
              <h2 className="text-[40px] font-bold">
                <span className="text-blue-500">50+</span>
                <br />
                <span>projects</span>
              </h2>
            </div>
            <div>
              <h2 className="text-[40px] font-bold">
                <span className="text-blue-500">4+</span>
                <br />
                <span>countries</span>
              </h2>
            </div>
            <div>
              <h2 className="text-[40px] font-bold">
                <span className="text-blue-500">20+</span>
                <br />
                <span>clients</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="team-members" className="bg-[#F6F6F6] p-[20px] md:p-[80px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[10px]">
            <p className="text-blue-500">MEET OUR TEAM</p>
            <h2 className="text-[40px] font-bold">
              People Behind the Succcess
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-8">
            {team.map((item: TeamCardProps) => (
              <TeamCard
                id={item.id}
                image={item.image}
                linkedin={item.linkedin}
                name={item.name}
                role={item.role}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="p-[20px] md:p-[80px]">
        <div className="container mx-auto flex flex-col gap-[20px] md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="text-[40px] font-bold text-blue-500">
              Ready To Get Started
            </h2>
            <p>
              Connect with us to explore how we can deliver exceptional IT
              solutions for your needs.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
