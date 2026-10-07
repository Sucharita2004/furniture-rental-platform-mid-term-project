
import type { Furniture } from "../../../types/interface/Furniture.interface";
import FurnitureCard from "../HomeFeatured/FurnitureCard";

interface MostPopularFurnitureProps {
  furnitureData: Furniture[];
}

const MostPopularFurniture = ({
  furnitureData,
}: MostPopularFurnitureProps) => {
  return (
    <section className="w-full bg-[#FFF9FA] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
          <div>
            <p className="text-[#B08D3B] text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Customer Favorites
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17243D] mt-1">
              Most Popular Furniture
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl leading-6">
              Discover the furniture pieces our customers love the most.
              Find your favorite and rent it for your space.
            </p>
          </div>
        </div>

        {/* Furniture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-8">
          {furnitureData.slice(4, 8).map((item) => (
            <FurnitureCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MostPopularFurniture;