import { Heart } from "lucide-react";

const StoryImage = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
          alt="Beautiful modern interior"
          className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Decorative Box */}
      <div className="absolute -bottom-6 -right-4 sm:-right-7 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-[#DDBE70] -z-0" />

      {/* Floating Card */}
      <div className="absolute -bottom-5 left-5 sm:left-8 bg-[#17243D] text-white rounded-2xl px-5 py-4 shadow-xl">
        <div className="flex items-center gap-3">
          <Heart className="text-[#DDBE70]" size={22} />

          <div>
            <p className="text-xs text-gray-400">
              Designed for
            </p>

            <p className="font-bold">
              Modern Living
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryImage;