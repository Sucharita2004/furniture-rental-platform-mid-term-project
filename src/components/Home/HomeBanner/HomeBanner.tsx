import { ArrowDownRight, ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#17243D]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#3D5C88]/30 blur-3xl" />

        <div className="absolute -bottom-52 -left-40 w-[600px] h-[600px] rounded-full bg-[#DDBE70]/10 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="absolute top-1/2 left-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
      </div>

      {/* ================= DECORATIVE LINES ================= */}
      <div className="absolute top-0 right-[15%] hidden lg:block w-px h-full bg-white/[0.06]" />

      <div className="absolute top-0 right-[35%] hidden lg:block w-px h-full bg-white/[0.04] rotate-[18deg]" />

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center min-h-[calc(100vh-120px)]">

          {/* ================= LEFT ================= */}
          <div className="relative z-10">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DDBE70]/30 bg-white/[0.06] backdrop-blur-md px-4 py-2">
              <Sparkles
                size={14}
                className="text-[#DDBE70]"
              />

              <span className="text-[#DDBE70] text-xs sm:text-sm font-medium tracking-wide">
                Furniture, but make it yours.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-7 sm:mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[86px] leading-[0.95] tracking-[-0.04em] font-semibold text-white">

              Your Space.

              <br />

              <span className="text-[#DDBE70] italic font-normal">
                Your Style.
              </span>

              <br />

              Your Way.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-white/60">
              Beautiful furniture for the way you live.
              Rent premium pieces, change your style whenever you want,
              and create a space that truly feels like you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8">

              <Link
                to="/furniture"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DDBE70] px-7 py-3.5 text-sm sm:text-base font-bold text-[#17243D] transition-all duration-300 hover:bg-[#E8CE88] hover:scale-[1.03]"
              >
                Explore Collection

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#17243D] text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#17243D]"
              >
                Discover FurniRent
              </Link>

            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9">

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full border-2 border-[#17243D] bg-[#DDBE70]" />
                  <span className="h-7 w-7 rounded-full border-2 border-[#17243D] bg-[#8CA6C5]" />
                  <span className="h-7 w-7 rounded-full border-2 border-[#17243D] bg-[#C9B9A7]" />
                </div>

                <span className="text-xs sm:text-sm text-white/60">
                  120+ happy renters
                </span>
              </div>

              <div className="hidden sm:block h-5 w-px bg-white/20" />

              <div className="flex items-center gap-2">
                <Star
                  size={16}
                  fill="currentColor"
                  className="text-[#DDBE70]"
                />

                <span className="text-sm font-semibold text-white">
                  4.8
                </span>

                <span className="text-xs text-white/50">
                  customer rating
                </span>
              </div>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative z-10 w-full max-w-xl mx-auto lg:ml-auto">

            {/* Number */}
            <div className="absolute -left-1 sm:-left-5 lg:-left-14 top-4 sm:top-8 z-20">
              <div className="flex items-center gap-3">

                <span className="text-[#DDBE70] text-sm font-semibold">
                  01
                </span>

                <span className="h-px w-8 bg-[#DDBE70]/50" />

                <span className="text-white/30 text-xs">
                  03
                </span>

              </div>
            </div>

            {/* Image Frame */}
            <div className="relative">

              {/* Gold Glow */}
              <div className="absolute -inset-5 rounded-[3rem] bg-[#DDBE70]/10 blur-2xl" />

              <div className="relative h-[430px] sm:h-[500px] lg:h-[570px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-[#263B5B]">

                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=90"
                  alt="Modern furniture"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17243D]/80 via-transparent to-[#17243D]/10" />

                {/* Image Text */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">

                  <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#DDBE70]">
                    THE LIVING EDIT
                  </p>

                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                    Modern Comfort
                  </h2>

                </div>

              </div>

              {/* ================= PRICE CARD ================= */}
              <div className="absolute -bottom-5 left-3 sm:-left-8 rounded-2xl bg-white p-4 sm:p-5 shadow-2xl">

                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Rent from
                </p>

                <div className="mt-1 flex items-end gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#17243D]">
                    ₹699
                  </span>

                  <span className="mb-1 text-xs text-gray-400">
                    /month
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-green-600">
                  <Check size={13} />
                  Flexible plans
                </div>

              </div>

              {/* ================= RATING CARD ================= */}
              <div className="absolute right-3 sm:-right-6 top-8 sm:top-12 rounded-2xl border border-white/20 bg-[#17243D]/80 px-4 sm:px-5 py-3 sm:py-4 shadow-2xl backdrop-blur-xl">

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDBE70]">
                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-[#17243D]"
                    />
                  </div>

                  <div>
                    <p className="text-lg font-bold text-white">
                      4.8
                    </p>

                    <p className="text-[9px] text-white/40">
                      CUSTOMER RATING
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom  */}
            <div className="absolute -bottom-16 right-0 hidden lg:flex items-center gap-3 text-white/30">

              <span className="text-[10px] uppercase tracking-[0.25em]">
                Scroll to explore
              </span>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                <ArrowDownRight size={15} />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeBanner;