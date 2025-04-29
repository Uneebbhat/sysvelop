import ContactForm from "@/components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="py-16 px-[20px] md:p-[80px]">
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
};

export default Contact;
