import {
  ArrowUpRight,
  MapPin,
  Navigation,
} from "lucide-react";

const ContactVisit = () => {
  return (
    <section className="bg-[#17243D] py-20 sm:py-24">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
                alt="FurniRent studio"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-3xl bg-[#DDBE70]" />

          </div>

          {/* CONTENT */}
          <div>

            <span className="text-[#DDBE70] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
              Visit Us
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Let's talk furniture,
              <br />
              <span className="text-[#DDBE70]">
                in person.
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-7">
              Sometimes the easiest way to find the right furniture is
              simply to talk about what you need.
            </p>

            <div className="mt-8 p-5 rounded-2xl border border-white/10 bg-white/5">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#DDBE70]/15 flex items-center justify-center shrink-0">
                  <MapPin
                    size={21}
                    className="text-[#DDBE70]"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Our Location
                  </p>

                  <p className="mt-1 text-white font-semibold">
                    Kolkata, West Bengal, India
                  </p>
                </div>

              </div>

            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DDBE70] text-[#17243D] font-bold hover:bg-[#E8CE88] transition"
            >
              <Navigation size={17} />
              Get Directions
              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactVisit;