import { ArrowRight, Armchair, BedDouble, Utensils, BriefcaseBusiness, TreePine } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const categoryIcons = {
    "Living Room": Armchair,
    Bedroom: BedDouble,
    "Dining Room": Utensils,
    Office: BriefcaseBusiness,
    Outdoor: TreePine,
  };

  const Icon =
    categoryIcons[category.name as keyof typeof categoryIcons];

  return (
    <Link
      to="/furniture"
      className="
        group relative overflow-hidden
        rounded-2xl sm:rounded-3xl
        bg-white border border-gray-200
        p-4 sm:p-5 md:p-6
        text-center shadow-sm
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative mx-auto w-full h-32 sm:h-36 md:h-40 overflow-hidden rounded-xl sm:rounded-2xl">
        <img
          src={category.image}
          alt={category.name}
          className="
            w-full h-full object-cover
            group-hover:scale-110
            transition-transform duration-500
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17243D]/50 to-transparent" />
      </div>

      {/* Icon */}
      <div
        className="
          relative -mt-7 sm:-mt-8
          mx-auto
          w-14 h-14 sm:w-16 sm:h-16
          rounded-2xl
          bg-white border border-gray-200
          shadow-md
          flex items-center justify-center
          group-hover:bg-[#DDBE70]
          transition-all duration-300
        "
      >
        {Icon && (
          <Icon
            size={26}
            strokeWidth={1.7}
            className="
              text-[#17243D]
              group-hover:scale-110
              transition-transform duration-300
              sm:w-8 sm:h-8
            "
          />
        )}
      </div>

      {/* Name */}
      <h3
        className="
          text-sm sm:text-base md:text-lg
          font-bold text-[#17243D]
          mt-4
          group-hover:text-[#B08D3B]
          transition-colors
        "
      >
        {category.name}
      </h3>

      {/* Description */}
      <p className="hidden sm:block text-xs md:text-sm text-gray-500 mt-1.5 leading-5">
        {category.description}
      </p>

      {/* Arrow */}
      <div className="flex justify-center mt-3 sm:mt-4">
        <div
          className="
            w-7 h-7 sm:w-8 sm:h-8
            rounded-full
            bg-[#17243D] text-white
            flex items-center justify-center
            group-hover:bg-[#DDBE70]
            group-hover:text-[#17243D]
            transition-all duration-300
          "
        >
          <ArrowRight size={14} className="sm:w-4 sm:h-4" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;