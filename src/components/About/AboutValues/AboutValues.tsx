import {
  Heart,
  Home,
  Sparkles,
  Truck,
} from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      number: "01",
      icon: Sparkles,
      title: "Beautiful Choices",
      description:
        "Discover furniture designed to bring character, comfort and style into your space.",
    },
    {
      number: "02",
      icon: Heart,
      title: "Made for You",
      description:
        "Choose furniture according to your lifestyle, room, needs and personal taste.",
    },
    {
      number: "03",
      icon: Home,
      title: "Flexible Living",
      description:
        "Rental gives you the freedom to change your space without permanent commitment.",
    },
    {
      number: "04",
      icon: Truck,
      title: "Easy Experience",
      description:
        "From discovering furniture to placing a rental request, keep the experience simple.",
    },
  ];

  return (
    <section className="bg-[#17243D] py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-[#DDBE70] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
            What We Believe
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            More than furniture.
            <br />
            <span className="text-[#DDBE70]">
              It's your space.
            </span>
          </h2>

          <p className="mt-6 text-gray-300 text-sm sm:text-base leading-7 max-w-2xl">
            Our approach is focused on making furniture rental feel simple,
            flexible and enjoyable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.number}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#DDBE70] flex items-center justify-center">
                    <Icon
                      size={22}
                      className="text-[#17243D]"
                    />
                  </div>

                  <span className="text-white/20 text-4xl font-bold">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-6">
                  {value.description}
                </p>

                <div className="absolute bottom-0 left-6 right-6 h-1 bg-[#DDBE70] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default AboutValues;