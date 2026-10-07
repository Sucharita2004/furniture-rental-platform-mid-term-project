import type { Furniture } from "../../../types/interface/Furniture.interface";
import FurnitureCard from "../HomeFeatured/FurnitureCard";

interface NewFurnitureProps {
  furnitureData: Furniture[];
}

const NewFurniture = ({ furnitureData }: NewFurnitureProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#17243D] py-12 sm:py-14 md:py-16 lg:py-20">
      {/* Decorative Background */}
      <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#DDBE70]/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-24 sm:-bottom-40 sm:-left-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#3D5C88]/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="max-w-2xl">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#DDBE70]/10 border border-[#DDBE70]/30">
              <span className="w-2 h-2 rounded-full bg-[#DDBE70] animate-pulse" />

              <span className="text-[#DDBE70] text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">
                Freshly Added
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              New
              <span className="text-[#DDBE70]"> Arrivals</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-7 max-w-xl">
              Meet the latest additions to our collection. Fresh designs, modern
              comfort and beautiful pieces ready for your space.
            </p>
          </div>

          {/* Right Side Text */}
          <div className="hidden lg:block text-right">
            <p className="text-[#DDBE70] text-4xl font-bold">04</p>

            <p className="text-gray-400 text-sm mt-1">Latest Pieces</p>
          </div>
        </div>

        {/* Furniture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {furnitureData.slice(8, 12).map((item) => (
            <div key={item.id} className="relative group">
              {/* NEW Badge */}
              <div className="absolute -top-2 -right-2 z-20">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#DDBE70] text-[#17243D] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-lg">
                  New
                </span>
              </div>

              <FurnitureCard item={item} />
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex items-center justify-center gap-3 mt-10 sm:mt-12">
          <div className="w-10 sm:w-16 h-px bg-[#DDBE70]/40" />

          <span className="text-gray-400 text-xs sm:text-sm">
            Fresh styles. New possibilities.
          </span>

          <div className="w-10 sm:w-16 h-px bg-[#DDBE70]/40" />
        </div>
      </div>
    </section>
  );
};

export default NewFurniture;
