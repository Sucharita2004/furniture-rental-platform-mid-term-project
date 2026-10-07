import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import furniture from "../../../services/json/furniture.json";

const FurnitureDetails = () => {
  const { id } = useParams();

  const item = furniture.find(
    (furnitureItem) => furnitureItem.id === Number(id)
  );

  if (!item) {
    return (
      <div className="min-h-screen bg-[#FFF9FA] flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#17243D]">
            Furniture Not Found
          </h1>

          <p className="text-gray-500 mt-3">
            The furniture item you are looking for does not exist.
          </p>

          <Link
            to="/furniture"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-[#17243D] text-white font-semibold hover:bg-[#DDBE70] hover:text-[#17243D] transition"
          >
            <ArrowLeft size={18} />
            Back to Furniture
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9FA]">

      {/* ================= TOP ================= */}
      <section className="bg-[#17243D] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">

          <Link
            to="/furniture"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#DDBE70] transition"
          >
            <ArrowLeft size={17} />
            Back to Furniture
          </Link>

        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ================= IMAGE ================= */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17243D]/30 to-transparent pointer-events-none" />

              {/* Category */}
              <div className="absolute top-5 left-5">
                <span className="px-4 py-2 rounded-full bg-[#DDBE70] text-[#17243D] text-xs sm:text-sm font-bold shadow-lg">
                  {item.category}
                </span>
              </div>

              {/* Wishlist */}
              <button
                type="button"
                className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center text-[#17243D] shadow-lg hover:bg-[#DDBE70] transition"
              >
                <Heart size={21} />
              </button>

              {/* Availability */}
              <div className="absolute bottom-5 left-5">
                {item.availability ? (
                  <span className="px-4 py-2 rounded-full bg-green-500 text-white text-xs sm:text-sm font-semibold shadow-lg">
                    Available Now
                  </span>
                ) : (
                  <span className="px-4 py-2 rounded-full bg-red-500 text-white text-xs sm:text-sm font-semibold shadow-lg">
                    Not Available
                  </span>
                )}
              </div>

            </div>

          </div>

          {/* ================= CONTENT ================= */}
          <div>

            {/* Brand */}
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#B08D3B]">
              {item.brand}
            </p>

            {/* Name */}
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17243D] leading-tight">
              {item.name}
            </h1>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-3 mt-5">

              <div className="flex items-center gap-1.5 bg-[#FFF7DF] px-3 py-2 rounded-xl">
                <Star
                  size={17}
                  className="text-[#DDBE70]"
                  fill="currentColor"
                />

                <span className="font-bold text-[#17243D]">
                  {item.rating}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                {item.reviews} reviews
              </span>

            </div>

            {/* Description */}
            <p className="mt-7 text-gray-600 leading-7 text-sm sm:text-base">
              Bring comfort and style into your space with this beautiful{" "}
              {item.name.toLowerCase()}. Designed for modern living, this
              furniture piece combines practical design with a clean and
              elegant look.
            </p>

            {/* Price */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">

              <p className="text-sm text-gray-500">
                Rental Price
              </p>

              <div className="flex items-end gap-2 mt-1">

                <span className="text-4xl font-bold text-[#17243D]">
                  ₹{item.price}
                </span>

                <span className="text-gray-500 mb-1">
                  /{item.priceUnit}
                </span>

              </div>

              <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                <ShieldCheck
                  size={17}
                  className="text-[#B08D3B]"
                />

                Security Deposit: ₹{item.securityDeposit}
              </div>

            </div>

            {/* ================= SPECS ================= */}
            <div className="mt-8">

              <h2 className="text-xl font-bold text-[#17243D]">
                Furniture Details
              </h2>

              <div className="grid grid-cols-2 gap-3 mt-4">

                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <p className="text-xs text-gray-400">
                    Type
                  </p>

                  <p className="mt-1 font-semibold text-[#17243D]">
                    {item.type}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <p className="text-xs text-gray-400">
                    Room
                  </p>

                  <p className="mt-1 font-semibold text-[#17243D]">
                    {item.room}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <p className="text-xs text-gray-400">
                    Material
                  </p>

                  <p className="mt-1 font-semibold text-[#17243D]">
                    {item.material}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <p className="text-xs text-gray-400">
                    Color
                  </p>

                  <p className="mt-1 font-semibold text-[#17243D]">
                    {item.color}
                  </p>
                </div>

              </div>

            </div>

            {/* ================= QUANTITY ================= */}
            <div className="mt-8">

              <p className="text-sm font-semibold text-[#17243D] mb-3">
                Quantity
              </p>

              <div className="inline-flex items-center border border-gray-200 bg-white rounded-xl overflow-hidden">

                <button
                  type="button"
                  className="w-11 h-11 flex items-center justify-center hover:bg-[#F7F4EE]"
                >
                  <Minus size={16} />
                </button>

                <span className="w-12 text-center font-semibold text-[#17243D]">
                  1
                </span>

                <button
                  type="button"
                  className="w-11 h-11 flex items-center justify-center hover:bg-[#F7F4EE]"
                >
                  <Plus size={16} />
                </button>

              </div>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">

              <button
                type="button"
                className="flex-1 py-4 rounded-xl border-2 border-[#17243D] text-[#17243D] font-bold hover:bg-[#17243D] hover:text-white transition"
              >
                Add to Cart
              </button>

              <button
                type="button"
                className="flex-1 py-4 rounded-xl bg-[#17243D] text-white font-bold hover:bg-[#DDBE70] hover:text-[#17243D] transition"
              >
                Rent Now
              </button>

            </div>

            {/* ================= BENEFITS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F7F4EE]">
                <div className="w-10 h-10 rounded-full bg-[#DDBE70]/20 flex items-center justify-center">
                  <Truck
                    size={19}
                    className="text-[#B08D3B]"
                  />
                </div>

                <div>
                  <p className="font-semibold text-[#17243D] text-sm">
                    Easy Delivery
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Delivered to your door
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F7F4EE]">
                <div className="w-10 h-10 rounded-full bg-[#DDBE70]/20 flex items-center justify-center">
                  <ShieldCheck
                    size={19}
                    className="text-[#B08D3B]"
                  />
                </div>

                <div>
                  <p className="font-semibold text-[#17243D] text-sm">
                    Secure Rental
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Simple rental experience
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default FurnitureDetails;