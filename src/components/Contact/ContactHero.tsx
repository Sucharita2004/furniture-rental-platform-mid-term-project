import {
  ArrowDown,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-[#17243D]">

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[18vw] font-black text-white/[0.025] tracking-tighter">
          CONTACT
        </h1>
      </div>

      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#DDBE70]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#3D5C88]/30 blur-3xl" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DDBE70]/30 bg-white/5">

              <Sparkles
                size={15}
                className="text-[#DDBE70]"
              />

              <span className="text-[#DDBE70] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                Let's Connect
              </span>

            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">

              Your space.
              <br />

              <span className="text-[#DDBE70]">
                Your questions.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-gray-300 text-sm sm:text-base lg:text-lg leading-8">

              Have a question about furniture, rentals, delivery or your
              order? We are here to make your furniture journey simple.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              {/* Send Message */}
              <Link
                to="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#DDBE70] text-[#17243D] font-bold hover:bg-[#E8CE88] hover:scale-105 transition-all duration-300"
              >
                Send a Message

                <ArrowRight size={18} />
              </Link>

              {/* Explore Furniture */}
              <Link
                to="/furniture"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white hover:text-[#17243D] transition-all duration-300"
              >
                Explore Furniture
              </Link>

            </div>

            {/* Scroll to Contact Info */}
            <Link
              to="#contact-info"
              className="inline-flex items-center gap-2 mt-10 text-gray-400 hover:text-[#DDBE70] transition"
            >

              <ArrowDown size={17} />

              <span className="text-sm">
                Scroll to connect
              </span>

            </Link>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
                alt="Modern workspace"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17243D]/70 via-transparent to-transparent" />

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-5 sm:left-8 bg-white rounded-2xl shadow-2xl px-5 py-4">

              <div className="flex items-center gap-3">

                {/* Icon */}
                <div className="w-11 h-11 rounded-full bg-[#DDBE70]/20 flex items-center justify-center">

                  <MessageCircle
                    size={21}
                    className="text-[#B08D3B]"
                  />

                </div>

                {/* Text */}
                <div>

                  <p className="text-xs text-gray-400">
                    Need help?
                  </p>

                  <p className="font-bold text-[#17243D]">
                    Let's make it easy.
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

export default ContactHero;