import {
  Search,
  CalendarDays,
  Truck,
  Sofa,
  ArrowRight,
} from "lucide-react";

interface RentalStepProps {
  step: {
    id: number;
    title: string;
    description: string;
  };
  isLast: boolean;
}

const RentalStep = ({ step, isLast }: RentalStepProps) => {
  const stepIcons = {
    "Choose Furniture": Search,
    "Select Rental Plan": CalendarDays,
    "Get It Delivered": Truck,
    "Enjoy Your Space": Sofa,
  };

  const Icon =
    stepIcons[step.title as keyof typeof stepIcons];

  return (
    <div className="relative group text-center">

      {/* Step Number */}
      <div className="
        relative z-10 mx-auto
        w-12 h-12 rounded-full
        bg-[#DDBE70] text-[#17243D]
        flex items-center justify-center
        font-extrabold text-lg
        shadow-lg
        group-hover:scale-110
        transition-transform duration-300
      ">
        {step.id}
      </div>

      {/* Icon */}
      <div className="
        relative z-10 mx-auto mt-5
        w-20 h-20 sm:w-24 sm:h-24
        rounded-3xl
        bg-white/10
        border border-white/10
        backdrop-blur-sm
        flex items-center justify-center
        group-hover:bg-[#DDBE70]
        group-hover:border-[#DDBE70]
        transition-all duration-300
      ">
        {Icon && (
          <Icon
            size={34}
            strokeWidth={1.6}
            className="
              text-[#DDBE70]
              group-hover:text-[#17243D]
              group-hover:scale-110
              transition-all duration-300
            "
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-white mt-5">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-6 mt-3 max-w-xs mx-auto">
        {step.description}
      </p>

      {/* Arrow */}
      {!isLast && (
        <div className="
          hidden lg:flex
          absolute top-[68px]
          -right-5 xl:-right-6
          items-center justify-center
        ">
          <ArrowRight
            size={18}
            className="text-[#DDBE70]/60"
          />
        </div>
      )}

    </div>
  );
};

export default RentalStep;