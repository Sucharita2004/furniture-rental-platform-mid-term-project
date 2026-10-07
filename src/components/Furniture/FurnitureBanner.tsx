import { FiStar } from "react-icons/fi";

const FurnitureBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE]">
      {/* Background Shapes */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-[#DDBE70]/20 blur-3xl" />

      <div className="absolute -right-20 -bottom-32 w-96 h-96 rounded-full bg-[#263B5B]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17243D] text-[#DDBE70] text-sm font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-[#DDBE70]" />
              Premium Furniture Rental
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#17243D] leading-tight">
              Furniture That
              <br />
              <span className="text-[#B08D3B]">
                Fits Your Lifestyle
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-5 max-w-xl leading-relaxed">
              Discover beautiful, comfortable and affordable furniture for
              every corner of your home. Rent today and create a space you
              truly love.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8">

              <div>
                <h3 className="text-2xl font-bold text-[#17243D]">
                  500+
                </h3>

                <p className="text-sm text-gray-500">
                  Furniture Items
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-[#17243D]">
                    4.8
                  </h3>

                  <FiStar
                    size={20}
                    className="text-[#DDBE70]"
                    fill="currentColor"
                  />
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Customer Rating
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#17243D]">
                  Easy
                </h3>

                <p className="text-sm text-gray-500">
                  Rental Process
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80"
                alt="Modern furniture"
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17243D]/50 to-transparent" />
            </div>

            {/* Price Card */}
            <div className="absolute -left-5 bottom-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4">
              <p className="text-xs text-gray-500">
                Starting from
              </p>

              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-[#17243D]">
                  ₹599
                </span>

                <span className="text-sm text-gray-500 mb-1">
                  /month
                </span>
              </div>
            </div>

            {/* Available Card */}
            <div className="absolute -right-5 top-8 bg-[#17243D] text-white rounded-2xl shadow-xl px-5 py-4">
              <p className="text-xs text-gray-300">
                Furniture
              </p>

              <p className="font-semibold text-[#DDBE70]">
                Available Now
              </p>
            </div>

            {/* Circle */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full border-[10px] border-[#DDBE70]/40" />

          </div>

        </div>
      </div>
    </section>
  );
};

export default FurnitureBanner;