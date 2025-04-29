import Button from "@/components/ui/button";
import ServicesCard from "@/components/ui/services-card";
import ContactForm from "@/components/ContactForm";
import services from "@/data/services.json";
import testimonials from "@/data/testimonials.json";
import processSteps from "@/data/processSteps.json";
import features from "@/data/features.json";
import { JSX } from "react";
import { Check, Clock, FileText, Menu, Plus, Repeat } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import ClientsSlider from "@/components/ClientsSlider";

const iconMap: Record<string, JSX.Element> = {
  checkmark: <Check className="w-10 h-10" />,
  menu: <Menu className="w-10 h-10" />,
  document: <FileText className="w-10 h-10" />,
  clock: <Clock className="w-10 h-10" />,
  plus: <Plus className="w-10 h-10" />,
  "arrow-loop": <Repeat className="w-10 h-10" />,
};

export default function Home() {
  return (
    <>
      <main className="relative text-center flex flex-col items-center justify-center py-20 md:py-36 px-5 overflow-hidden">
        {/* Primary Blue Gradient Blob */}
        <div
          className="absolute top-[-100px] left-1/3 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-tr from-[#003AFC] to-[#29408b] opacity-20 blur-3xl pointer-events-none z-0 hidden md:block"
          aria-hidden="true"
        ></div>

        {/* Complementary Aqua/Cyan Gradient Blob */}
        <div
          className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-300 to-indigo-400 opacity-20 blur-2xl pointer-events-none z-0"
          aria-hidden="true"
        ></div>

        {/* Main Content */}
        <h1 className="z-10 font-bold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <TextAnimate animation="blurInUp" by="character" once>
            WE ENGINEER
          </TextAnimate>
          <TextAnimate animation="blurInUp" by="character" once>
            DIGITAL FUTURE
          </TextAnimate>
        </h1>

        <p className="z-10 text-base sm:text-lg md:text-xl lg:text-2xl max-w-full md:max-w-[800px] mt-4">
          <TextAnimate animation="blurInUp" by="character" once delay={0.5}>
            Sysvelop is a boundary-pushing tech & design collective transforming
          </TextAnimate>
          <TextAnimate animation="blurInUp" by="character" once delay={0.5}>
            visions into world-class digital products.
          </TextAnimate>
        </p>
      </main>

      <section id="clients" className="py-16 px-[20px] md:p-[80px]">
        <div className="container mx-auto">
          <ClientsSlider />
        </div>
      </section>

      <section
        id="our-services"
        className="bg-[#F6F6F6] py-16 px-[20px] md:p-[80px]"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-[10px]">
            <p className="text-blue-500">OUR SERVICES</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Transform Your Business
            </h2>
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

      <section id="achievements" className="py-16 px-[20px] md:p-[80px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-[40px] md:gap-[20px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <p className="text-blue-500">OUR SERVICES</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-blue-500">50+</span>
                <br />
                <span>projects</span>
              </h2>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-blue-500">4+</span>
                <br />
                <span>countries</span>
              </h2>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-blue-500">20+</span>
                <br />
                <span>clients</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-[#F6F6F6] py-16 px-[20px] md:p-[80px]"
      >
        <div className="container mx-auto">
          <div>
            <p className="text-sm uppercase text-blue-500 font-semibold mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              How We Work at Sysvelop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left mt-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d={step.icon} />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {step.step}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-16 px-[20px] md:p-[80px]">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Why Choose Sysvelop
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-${feature.bgColor} p-8 rounded-2xl shadow hover:shadow-md transition`}
              >
                <div className="text-blue-600 mb-4">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-[#F6F6F6] py-16 px-[20px] md:p-[80px]"
      >
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12">
            See what our clients say about us
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <svg
                  className="w-8 h-8 text-blue-500 mb-4 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.24 5.24 0 002 11.41V18a1 1 0 001 1h6a1 1 0 001-1v-5.83A5.24 5.24 0 007.17 6zm10 0A5.24 5.24 0 0012 11.41V18a1 1 0 001 1h6a1 1 0 001-1v-5.83A5.24 5.24 0 0017.17 6z" />
                </svg>
                <p className="text-gray-700 text-base mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="text-sm font-medium text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 px-[20px] md:p-[80px]">
        <div className="container mx-auto flex flex-col gap-[20px] md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
              Ready To Get Started
            </h2>
            <p>
              Connect with us to explore how we can deliver exceptional IT
              solutions for your needs.
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
