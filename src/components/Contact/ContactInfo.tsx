import contactInfo from "../../services/json/ContactInfo.json";


const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      className="bg-[#FFF9FA] py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#DDBE70]/15 flex items-center justify-center group-hover:bg-[#DDBE70] transition">

                  <Icon
                    size={22}
                    className="text-[#B08D3B] group-hover:text-[#17243D]"
                  />

                </div>

                {/* Title */}
                <p className="mt-5 text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  {item.title}
                </p>

                {/* Value */}
                <h3 className="mt-2 text-lg font-bold text-[#17243D]">
                  {item.value}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-500 leading-6">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;