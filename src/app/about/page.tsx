import Button from "@/components/ui/button";

export default function About() {
  return (
    <>
      <section className="py-20 md:py-32 px-5 about-main">
        <div className="container mx-auto relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-10 max-w-3xl text-center shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-6">
              We transform bold ideas into impactful digital experiences. Your
              vision, engineered to scale.
            </p>
            <a href="#who-we-are">
              <Button className="primary mx-auto">Learn More</Button>
            </a>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-[20px] md:p-[80px] bg-[#F6F6F6]"
        id="who-we-are"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            At Sysvelop, we&apos;re a team of engineers, designers, and
            strategists crafting impactful digital experiences. Our
            service-driven model ensures each client receives solutions
            customized to their unique needs and market demands.
          </p>
        </div>
      </section>

      <section className="py-16 px-[20px] md:p-[80px]">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with transformative digital solutions that
              enhance operational efficiency, user engagement, and market
              performance.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in tech innovation by delivering scalable,
              human-centric software that drives progress and purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-[20px] md:p-[80px] bg-[#F6F6F6]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Integrity",
                desc: "We act with transparency and accountability in everything we do.",
              },
              {
                title: "Innovation",
                desc: "We push boundaries and challenge the status quo with cutting-edge tech.",
              },
              {
                title: "Excellence",
                desc: "We deliver quality and precision in every line of code.",
              },
            ].map((val, i) => (
              <div key={i} className="p-6 shadow rounded-xl bg-white">
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[20px] md:p-[80px]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Ali Khan",
                role: "CEO, Cart Inc.",
                feedback:
                  "sysvelop transformed our operations with a scalable solution delivered on time and beyond expectations.",
              },
              {
                name: "Fatima Rehman",
                role: "Founder, MakkiTV",
                feedback:
                  "The communication, transparency, and delivery speed were exceptional. Highly recommended team.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-6 bg-white shadow rounded-xl">
                <p className="text-gray-600 italic mb-4">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <h4 className="text-lg font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[20px] md:p-[80px] bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mb-6 text-lg">
            Whether you&apos;re starting from scratch or looking to scale,
            we&apos;re ready to help.
          </p>
          <Button className="secondary mx-auto">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
