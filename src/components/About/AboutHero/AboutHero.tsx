import { ArrowDown, MoveUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#17243D]">
      
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[18vw] font-black uppercase tracking-tighter text-white/[0.025] whitespace-nowrap">
          FURNIRENT
        </h1>
      </div>

      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#DDBE70]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#3D5C88]/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DDBE70]/30 bg-white/5">
              <Sparkles size={15} className="text-[#DDBE70]" />

              <span className="text-[#DDBE70] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
                About FurniRent
              </span>
            </div>

            <h2 className="mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold leading-[0.95] tracking-tight text-white">
              Furniture
              <br />
              <span className="text-[#DDBE70]">
                that moves
              </span>
              <br />
              with you.
            </h2>

            <p className="mt-7 max-w-xl text-gray-300 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8">
              FurniRent makes it easier to create a beautiful space without
              the commitment of buying everything permanently.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/furniture"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#DDBE70] text-[#17243D] font-bold hover:bg-[#E8CE88] hover:scale-105 transition-all duration-300"
              >
                Explore Furniture
                <MoveUpRight size={18} />
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white hover:text-[#17243D] transition-all duration-300"
              >
                Our Story
                <ArrowDown size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
                alt="Modern furniture interior"
                className="w-full h-[420px] sm:h-[500px] lg:h-[580px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17243D]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-4 sm:left-8 bg-white rounded-2xl p-5 shadow-2xl max-w-[230px]">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Our Philosophy
              </p>

              <p className="mt-2 text-[#17243D] font-bold text-lg leading-snug">
                Beautiful spaces should feel effortless.
              </p>

              <div className="w-10 h-1 bg-[#DDBE70] rounded-full mt-4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;