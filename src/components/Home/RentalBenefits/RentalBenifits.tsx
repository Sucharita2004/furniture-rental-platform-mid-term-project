
import benefits from "../../../services/json/benifits.json";
import BenefitCard from "./BenefitCard";
import RentalConfidence from "./RentalConfidence";

const RentalBenefits = () => {
  return (
    <section
      className="
        relative w-full
        overflow-hidden
        bg-[#FFF9FA]
        py-12 sm:py-14 md:py-16 lg:py-20
      "
    >
      {/* Decorative Background */}
      <div
        className="
          absolute
          -top-20 -left-20
          sm:-top-28 sm:-left-28
          w-56 h-56
          sm:w-72 sm:h-72
          rounded-full
          bg-[#DDBE70]/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-24 -right-20
          sm:-bottom-32 sm:-right-28
          w-64 h-64
          sm:w-80 sm:h-80
          rounded-full
          bg-[#3D5C88]/10
          blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-[#17243D]/5
              border border-[#17243D]/10
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#DDBE70]" />

            <span
              className="
                text-[#B08D3B]
                text-xs sm:text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
              "
            >
              Why Choose FurniRent
            </span>
          </div>

          <h2
            className="
              mt-4 sm:mt-5
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              text-[#17243D]
            "
          >
            Rental Made
            <span className="text-[#B08D3B]"> Simple</span>
          </h2>

          <p
            className="
              mt-4
              text-gray-500
              text-sm sm:text-base md:text-lg
              leading-7
            "
          >
            Everything you need for a smooth and comfortable furniture rental
            experience, from selection to delivery.
          </p>

        </div>

        {/* Benefits Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5 sm:gap-6
            mt-10 sm:mt-12
          "
        >
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
            />
          ))}
        </div>

        {/* Bottom  */}
        <RentalConfidence />

      </div>
    </section>
  );
};

export default RentalBenefits;