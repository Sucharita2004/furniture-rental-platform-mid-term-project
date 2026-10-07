import { FiStar } from "react-icons/fi";

const ReviewBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#29263F]">

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 sm:-top-28 sm:-right-20 lg:-top-32 lg:-right-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#DDBE70]/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-20 sm:-bottom-32 sm:-left-20 lg:-bottom-40 lg:-left-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#3D5C88]/20 blur-3xl" />


      {/* Decorative Lines */}
      <div className="hidden md:block absolute top-0 right-[28%] w-px h-full bg-white/10 rotate-[25deg]" />

      <div className="hidden md:block absolute top-0 right-[22%] w-px h-full bg-[#DDBE70]/10 rotate-[25deg]" />


      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-16">


          {/* ================= LEFT CONTENT ================= */}

          <div className="w-full max-w-2xl text-center lg:text-left">

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#DDBE70] flex items-center justify-center shadow-lg shrink-0">

                <FiStar
                  size={19}
                  className="text-[#17243D]"
                  fill="currentColor"
                />

              </div>

              <span className="text-[#DDBE70] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em]">
                Customer Voices
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">

              Your Experience

              <br />

              <span className="text-[#DDBE70]">
                Matters to Us
              </span>

            </h1>


            {/* Description */}
            <p className="text-gray-300 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-relaxed max-w-xl mx-auto lg:mx-0">

              Every review helps us create a better rental experience.
              Share your thoughts and see what our furniture community has
              to say.

            </p>


            {/* Bottom Accent */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-7 sm:mt-8">

              <div className="w-10 sm:w-14 h-[2px] bg-[#DDBE70]" />

              <span className="text-gray-400 text-xs sm:text-sm">
                Real experiences. Real customers.
              </span>

            </div>

          </div>


          {/* ================= RIGHT RATING CARD ================= */}

          <div className="relative w-full sm:w-auto flex justify-center lg:justify-end">

            {/* Top Star */}
            <div className="absolute -top-4 -left-2 sm:-top-5 sm:-left-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#DDBE70] flex items-center justify-center rotate-12 shadow-xl z-10">

              <FiStar
                size={16}
                className="text-[#17243D]"
                fill="currentColor"
              />

            </div>


            {/* Bottom Star */}
            <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3D5C88] flex items-center justify-center -rotate-12 z-10">

              <FiStar
                size={12}
                className="text-white"
                fill="currentColor"
              />

            </div>


            {/* Rating Card */}
            <div className="relative w-full max-w-sm sm:w-80 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">

              <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-widest">
                Overall Rating
              </p>


              {/* Rating */}
              <div className="flex items-center gap-3 sm:gap-4 mt-4">

                <span className="text-5xl sm:text-6xl font-bold text-white">
                  4.7
                </span>


                <div>

                  <div className="flex gap-0.5 sm:gap-1">

                    {Array.from({ length: 5 }, (_, index) => (
                      <FiStar
                        key={index}
                        size={16}
                        className="text-[#DDBE70] sm:w-[18px] sm:h-[18px]"
                        fill="currentColor"
                      />
                    ))}

                  </div>

                  <p className="text-gray-400 text-[10px] sm:text-xs mt-2">
                    Customer satisfaction
                  </p>

                </div>

              </div>


              {/* Divider */}
              <div className="h-px bg-white/10 my-5 sm:my-6" />


              {/* Review Stats */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    300+
                  </p>

                  <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                    Happy Reviews
                  </p>
                </div>


                <div className="w-px h-9 sm:h-10 bg-white/10" />


                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#DDBE70]">
                    95%
                  </p>

                  <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                    Positive Feedback
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ReviewBanner;