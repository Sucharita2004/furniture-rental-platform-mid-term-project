import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


import RentalStep from "./RentalStep";
import rentalWork from "../../../services/json/rentalWork.json";


const RentalWork = () => {
  return (
    <section className="
      relative w-full overflow-hidden
      bg-[#17243D]
      py-12 sm:py-14 md:py-16 lg:py-20
    ">

      {/* Background Decoration */}
      <div className="
        absolute top-0 left-0
        w-40 h-40 sm:w-56 sm:h-56
        rounded-full
        bg-[#DDBE70]/10
        blur-3xl
      " />

      <div className="
        absolute bottom-0 right-0
        w-52 h-52 sm:w-72 sm:h-72
        rounded-full
        bg-[#3D5C88]/30
        blur-3xl
      " />

      <div className="
        relative max-w-7xl
        mx-auto px-4 sm:px-6 lg:px-8
      ">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-white/5
            border border-[#DDBE70]/30
          ">
            <span className="w-2 h-2 rounded-full bg-[#DDBE70]" />

            <span className="
              text-[#DDBE70]
              text-xs sm:text-sm
              font-semibold uppercase
              tracking-[0.18em]
            ">
              Simple Rental Process
            </span>
          </div>

          <h2 className="
            mt-5
            text-3xl sm:text-4xl
            md:text-5xl lg:text-6xl
            font-bold text-white
            leading-tight
          ">
            How Rental
            <span className="text-[#DDBE70]"> Works</span>
          </h2>

          <p className="
            mt-4
            text-gray-300
            text-sm sm:text-base md:text-lg
            leading-7
            max-w-2xl mx-auto
          ">
            Renting your favorite furniture is simple. Just follow four easy
            steps and transform your space without the hassle of buying.
          </p>

        </div>

        {/* Steps */}
        <div className="relative mt-12 sm:mt-14 lg:mt-16">

          {/* Connecting Line */}
          <div className="
            hidden lg:block
            absolute top-16
            left-[12%] right-[12%]
            h-px bg-[#DDBE70]/30
          " />

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8 sm:gap-6 lg:gap-8
          ">
            {rentalWork.map((step) => (
              <RentalStep
                key={step.id}
                step={step}
                isLast={step.id === rentalWork.length}
              />
            ))}
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="
          mt-12 sm:mt-14 lg:mt-16
          flex flex-col sm:flex-row
          items-center justify-center
          gap-4 text-center
        ">

          <div className="
            flex items-center gap-2
            text-gray-300 text-sm
          ">
            <span className="
              w-2 h-2 rounded-full
              bg-[#DDBE70]
            " />

            Ready to transform your space?
          </div>

          <Link
            to="/furniture"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-full
              bg-[#DDBE70]
              text-[#17243D]
              font-bold text-sm
              hover:bg-[#E8CE88]
              hover:scale-105
              transition-all duration-300
            "
          >
            Explore Furniture
            <ArrowRight size={17} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default RentalWork;