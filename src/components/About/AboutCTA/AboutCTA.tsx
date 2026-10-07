import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#DDBE70] py-16 sm:py-20 lg:py-24">

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#17243D]/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">

        <div className="mx-auto w-14 h-14 rounded-2xl bg-[#17243D] flex items-center justify-center">
          <Sparkles
            size={24}
            className="text-[#DDBE70]"
          />
        </div>

        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17243D] leading-tight">
          Ready to create
          <br />
          a space that feels like you?
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-[#17243D]/70 text-sm sm:text-base lg:text-lg leading-7">
          Explore our furniture collection and find pieces that fit your
          lifestyle and space.
        </p>

        <div className="mt-8">
          <Link
            to="/furniture"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#17243D] text-white font-bold hover:bg-[#263B5B] hover:scale-105 transition-all duration-300"
          >
            Explore Furniture
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;