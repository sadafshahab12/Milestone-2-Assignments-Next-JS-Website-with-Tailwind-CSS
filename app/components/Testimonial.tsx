import React from "react";
import TestimonialCard from "./ui/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="bg-orange-500">
      <div className="md:p-10 p-5">
        <div className="testimonial sm:mb-10 mb-5">
          <h1 className="xs:text-[2.5rem] text-[2rem] text-center font-bold">Testimonials</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-5 lg:gap-8">
          <div>
            <TestimonialCard
              testimonialImg="/images/client1.jpg"
              clientName="Emily Chain"
              clientQuote="TasteBite is my go-to spot for delicious food!Exceptional service!"
            />
          </div>
          <div>
            <TestimonialCard
              testimonialImg="/images/client 2.jpg"
              clientName="David K"
              clientQuote="TasteBite's menu has something for everyone!Love the variety!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
