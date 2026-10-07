import { FaStar } from "react-icons/fa";

import testimonials from "../../../services/json/testimonials.json";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF9FA] py-12 sm:py-14 md:py-16 lg:py-20">

      {/* Decorative Background */}
      <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#DDBE70]/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#3D5C88]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17243D]/5 border border-[#17243D]/10">
            <span className="w-2 h-2 rounded-full bg-[#DDBE70]" />

            <span className="text-[#B08D3B] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
              Customer Stories
            </span>
          </div>

          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-[#17243D]">
            What Our
            <span className="text-[#B08D3B]"> Customers Say</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-7">
            Real experiences from customers who transformed their spaces with
            FurniRent.
          </p>

        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}

        </div>

        {/* Bottom Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12">

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={`bottom-star-${index}`}
                size={17}
                className="text-[#DDBE70]"
              />
            ))}
          </div>

          <p className="text-gray-500 text-sm">
            Loved by furniture renters across the city
          </p>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;