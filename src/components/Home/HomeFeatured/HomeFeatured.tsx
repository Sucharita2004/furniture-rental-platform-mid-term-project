import type { Furniture } from "../../../types/interface/Furniture.interface";
import FurnitureCard from "./FurnitureCard";

interface HomeFeaturedProps {
  furnitureData: Furniture[];
}

const HomeFeatured = ({ furnitureData }: HomeFeaturedProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">

      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">

        <div>
          <p className="text-[#B08D3B] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Our Collection
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17243D] mt-1">
            Featured Furniture
          </h2>
        </div>

      </div>

      {/* Furniture Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-8">

        {furnitureData.slice(0, 4).map((item) => (
          <FurnitureCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
};

export default HomeFeatured;

