import { FiHeart, FiStar } from "react-icons/fi";
import type { Furniture } from "../../../types/interface/Furniture.interface";
import { Link } from "react-router-dom";

interface FurnitureCardProps {
  item: Furniture;
}

const FurnitureCard = ({ item }: FurnitureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-52 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#DDBE70] text-[#17243D] text-[10px] sm:text-xs font-bold shadow-md">
            {item.category}
          </span>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 flex items-center justify-center text-[#17243D] shadow-md hover:bg-[#DDBE70] transition-all duration-300"
        >
          <FiHeart size={17} className="sm:w-[19px] sm:h-[19px]" />
        </button>

        {/* Availability */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          {item.availability ? (
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-green-500 text-white text-[10px] sm:text-xs font-semibold">
              Available
            </span>
          ) : (
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-red-500 text-white text-[10px] sm:text-xs font-semibold">
              Not Available
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Brand */}
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">
          {item.brand}
        </p>

        {/* Name */}
        <h2 className="text-lg sm:text-xl font-bold text-[#17243D] mt-1 line-clamp-1 group-hover:text-[#B08D3B] transition">
          {item.name}
        </h2>

        {/* Details */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
          <span>{item.material}</span>

          <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />

          <span>{item.color}</span>
        </div>

        {/* Rating */}
        <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-4">
          <div className="flex items-center gap-1 bg-[#FFF7DF] px-2 sm:px-2.5 py-1 rounded-lg">
            <FiStar
              size={14}
              className="text-[#DDBE70] sm:w-[15px] sm:h-[15px]"
              fill="currentColor"
            />

            <span className="text-xs sm:text-sm font-semibold text-[#17243D]">
              {item.rating}
            </span>
          </div>

          <span className="text-xs sm:text-sm text-gray-500">
            {item.reviews} reviews
          </span>
        </div>

        {/* Price & Rent */}
        <div className="flex items-center justify-between gap-3 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-100">
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-gray-500">Rental Price</p>

            <p className="text-xl sm:text-2xl font-bold text-[#17243D] whitespace-nowrap">
              ₹{item.price}
              <span className="text-xs sm:text-sm font-normal text-gray-500">
                /{item.priceUnit}
              </span>
            </p>
          </div>

          <Link
            to={`/furniture/${item.id}`}
            className="shrink-0 flex items-center justify-center px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#17243D] text-white text-xs sm:text-sm font-semibold hover:bg-[#DDBE70] hover:text-[#17243D] transition-all duration-300"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
