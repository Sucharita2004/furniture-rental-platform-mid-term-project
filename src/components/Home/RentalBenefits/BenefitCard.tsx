import {
  Truck,
  ShieldCheck,
  RefreshCw,
  WalletCards,
} from "lucide-react";

interface BenefitCardProps {
  benefit: {
    id: number;
    title: string;
    description: string;
  };
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  const benefitIcons = {
    "Easy Delivery": Truck,
    "Quality Assured": ShieldCheck,
    "Flexible Rentals": RefreshCw,
    "Affordable Pricing": WalletCards,
  };

  const Icon =
    benefitIcons[benefit.title as keyof typeof benefitIcons];

  return (
    <div
      className="
        group relative
        bg-white
        rounded-2xl sm:rounded-3xl
        border border-gray-200
        p-6 sm:p-7
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-2
        transition-all duration-300
      "
    >
      {/* Number */}
      <span
        className="
          absolute top-5 right-5
          text-4xl font-extrabold
          text-[#17243D]/5
        "
      >
        0{benefit.id}
      </span>

      {/* Icon */}
      <div
        className="
          relative
          w-14 h-14 sm:w-16 sm:h-16
          rounded-2xl
          bg-[#17243D]
          flex items-center justify-center
          group-hover:bg-[#DDBE70]
          transition-all duration-300
        "
      >
        {Icon && (
          <Icon
            size={26}
            strokeWidth={1.8}
            className="
              text-white
              group-hover:text-[#17243D]
              transition-colors duration-300
            "
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-[#17243D] mt-5">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-6 mt-3">
        {benefit.description}
      </p>

      {/* Bottom Accent */}
      <div
        className="
          w-10 h-1
          rounded-full
          bg-[#DDBE70]
          mt-5
          group-hover:w-16
          transition-all duration-300
        "
      />
    </div>
  );
};

export default BenefitCard;