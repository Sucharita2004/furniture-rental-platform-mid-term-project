import { ArrowRight, Sofa, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#17243D] py-14 sm:py-16 md:py-20 lg:py-24">

      {/* Decorative Circles */}
      <div className="absolute -top-28 -right-28 sm:-top-36 sm:-right-36 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#DDBE70]/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 sm:-bottom-40 sm:-left-40 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-[#3D5C88]/30 blur-3xl" />

      {/* Decorative Lines */}
      <div className="hidden md:block absolute top-0 left-[15%] w-px h-full bg-white/5 rotate-[20deg]" />
      <div className="hidden md:block absolute top-0 right-[20%] w-px h-full bg-[#DDBE70]/10 -rotate-[20deg]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#DDBE70]/30">
          <Sparkles
            size={15}
            className="text-[#DDBE70]"
          />

          <span className="text-[#DDBE70] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
            Make Your Space Yours
          </span>
        </div>

        {/* Icon */}
        <div className="mx-auto mt-6 w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#DDBE70] flex items-center justify-center shadow-2xl">
          <Sofa
            size={30}
            className="text-[#17243D] sm:w-9 sm:h-9"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-6 sm:mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Transform
          <br />
          <span className="text-[#DDBE70]">
            Your Space?
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
          Find beautiful furniture that fits your style, space and budget.
          Rent what you love and create a home you will enjoy.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">

          <Link
            to="/furniture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#DDBE70] text-[#17243D] font-bold text-sm sm:text-base shadow-lg hover:bg-[#E8CE88] hover:scale-105 transition-all duration-300"
          >
            Explore Furniture
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/wishlist"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white hover:text-[#17243D] transition-all duration-300"
          >
            View Wishlist
          </Link>

        </div>

        {/* Bottom Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-4 mt-10 sm:mt-12">

          <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#DDBE70]" />
            Flexible Rental Plans
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/20" />

          <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#DDBE70]" />
            Quality Furniture
          </div>

          <div className="hidden sm:block w-px h-5 bg-white/20" />

          <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#DDBE70]" />
            Easy Delivery
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeCTA;