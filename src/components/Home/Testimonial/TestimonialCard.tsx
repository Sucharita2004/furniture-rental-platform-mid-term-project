import { FaStar } from "react-icons/fa";
import { Quote } from "lucide-react";
import type { Testimonial } from "../../../types/interface/testimonial.interface";


interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      {/* Quote Icon */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#FFF7DF] flex items-center justify-center group-hover:bg-[#DDBE70] transition-colors duration-300">
        <Quote
          size={18}
          className="text-[#B08D3B] group-hover:text-[#17243D]"
        />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <FaStar
            key={index}
            size={15}
            className="text-[#DDBE70]"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 text-sm sm:text-base leading-7 mt-5 min-h-[120px]">
        "{testimonial.review}"
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100 my-5" />

      {/* Customer */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#17243D] text-[#DDBE70] flex items-center justify-center font-bold text-base sm:text-lg">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-sm sm:text-base font-bold text-[#17243D]">
            {testimonial.name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
            {testimonial.role}
          </p>
        </div>

      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-6 right-6 h-1 rounded-full bg-[#DDBE70] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default TestimonialCard;