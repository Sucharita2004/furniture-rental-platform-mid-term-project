import {
  FiHeart,
  FiShoppingBag,
  FiTrash2,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import furniture from "../../services/json/furniture.json";

const Wishlist = () => {
  const wishlistItems = furniture.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FFF9FA]">
      {/* ================= Banner ================= */}
      <section className="relative overflow-hidden bg-[#435B7A]">
        {/* Background Glow */}
        <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#DDBE70]/15 blur-3xl" />
        <div className="absolute -bottom-40 left-10 w-80 h-80 rounded-full bg-[#3D5C88]/40 blur-3xl" />

        {/* Decorative Lines */}
        <div className="absolute top-0 right-[30%] w-px h-full bg-[#DDBE70]/10 rotate-[25deg]" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-[#DDBE70]/10 rotate-[25deg]" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#DDBE70] shadow-lg shadow-[#DDBE70]/20">
                  <FiHeart
                    size={20}
                    className="text-[#17243D]"
                    fill="currentColor"
                  />
                </div>

                <span className="text-[#DDBE70] text-sm font-semibold uppercase tracking-[0.25em]">
                  Your Personal Collection
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Things You
                <br />
                <span className="text-[#DDBE70]">Love & Save</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 mt-5 text-base md:text-lg leading-relaxed max-w-xl">
                Keep your favorite furniture close. Your saved pieces are
                waiting for the perfect moment to become part of your space.
              </p>

              {/* Bottom Highlight */}
              <div className="flex items-center gap-3 mt-7">
                <div className="w-12 h-[2px] bg-[#DDBE70]" />

                <span className="text-gray-400 text-sm">
                  Find your perfect furniture
                </span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
              {/* Outer Circle */}
              <div className="absolute inset-4 rounded-full border border-[#DDBE70]/20" />

              {/* Middle Circle */}
              <div className="absolute inset-10 rounded-full border border-[#DDBE70]/30" />

              {/* Main Circle */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#DDBE70] flex flex-col items-center justify-center shadow-2xl shadow-black/30">
                <FiHeart
                  size={48}
                  className="text-[#17243D] mb-2"
                  fill="currentColor"
                />

                <span className="text-[#17243D] text-3xl font-bold">
                  {wishlistItems.length}
                </span>

                <span className="text-[#17243D]/70 text-xs font-semibold uppercase tracking-wider">
                  Saved Items
                </span>
              </div>

              {/* Floating Dots */}
              <div className="absolute top-5 right-8 w-3 h-3 rounded-full bg-[#DDBE70]" />
              <div className="absolute bottom-8 left-5 w-2 h-2 rounded-full bg-[#DDBE70]/70" />
              <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Wishlist Content ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-[#B08D3B] text-sm font-semibold uppercase tracking-wider">
              Saved Items
            </p>

            <h2 className="text-3xl font-bold text-[#17243D] mt-1">
              Your Favorite Furniture
            </h2>
          </div>

          {/* Item Count */}
          <span className="px-4 py-2 rounded-full bg-[#17243D] text-white text-sm font-semibold">
            {wishlistItems.length} Items
          </span>
        </div>

        {/* ================= Wishlist Cards ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                {/* ================= Image ================= */}
                <div className="relative sm:w-48 h-52 sm:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  {/* Category */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#DDBE70] text-[#17243D] text-xs font-bold">
                    {item.category}
                  </span>
                </div>

                {/* ================= Details ================= */}
                <div className="flex-1 p-5">
                  {/* Brand & Delete */}
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">
                        {item.brand}
                      </p>

                      <h3 className="text-xl font-bold text-[#17243D] mt-1">
                        {item.name}
                      </h3>
                    </div>

                    {/* Delete Button */}
                    <button
                      type="button"
                      className="w-9 h-9 rounded-full flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>

                  {/* Material & Color */}
                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                    <span>{item.material}</span>

                    <span>•</span>

                    <span>{item.color}</span>
                  </div>

                  {/* ================= Rating ================= */}
                  <div className="flex items-center gap-2 mt-3">
                    <FiStar
                      size={16}
                      className="text-[#DDBE70]"
                      fill="currentColor"
                    />

                    <span className="text-sm font-semibold text-gray-700">
                      {item.rating}
                    </span>

                    <span className="text-sm text-gray-400">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  {/* ================= Price & Cart ================= */}
                  <div className="flex items-center justify-between mt-5 gap-3">
                    {/* Price */}
                    <div>
                      <p className="text-xs text-gray-400">Starting from</p>

                      <p className="text-xl font-bold text-[#17243D]">
                        ₹{item.price}
                        <span className="text-xs font-normal text-gray-400">
                          /{item.priceUnit}
                        </span>
                      </p>
                    </div>

                    {/* Add to Cart */}
                    <button
                      type="button"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#17243D] text-white text-sm font-semibold hover:bg-[#DDBE70] hover:text-[#17243D] transition"
                    >
                      <FiShoppingBag size={17} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Continue Shopping ================= */}
        <div className="mt-10 text-center">
          <Link
            to="/furniture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#17243D] text-[#17243D] font-semibold hover:bg-[#17243D] hover:text-white transition"
          >
            Continue Shopping
            <FiArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
