import { ShieldCheck } from "lucide-react";

const RentalConfidence = () => {
  return (
    <div
      className="
        mt-10 sm:mt-12
        bg-[#17243D]
        rounded-2xl sm:rounded-3xl
        px-5 sm:px-8
        py-6 sm:py-7
        flex flex-col md:flex-row
        items-center
        justify-between
        gap-5
        text-center md:text-left
      "
    >
      <div>
        <p
          className="
            text-[#DDBE70]
            text-xs sm:text-sm
            font-semibold
            uppercase
            tracking-wider
          "
        >
          Rent with confidence
        </p>

        <h3 className="text-white text-xl sm:text-2xl font-bold mt-1">
          Beautiful furniture, without the commitment.
        </h3>
      </div>

      <div className="flex items-center gap-2 text-gray-300 text-sm">
        <ShieldCheck
          size={20}
          className="text-[#DDBE70]"
        />

        Hassle-free rental experience
      </div>
    </div>
  );
};

export default RentalConfidence;