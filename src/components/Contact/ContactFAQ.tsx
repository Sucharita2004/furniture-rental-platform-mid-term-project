import { Plus } from "lucide-react";
import contactFAQ from "../../services/json/ContactFAQ.json";



const ContactFAQ = () => {
  return (
    <section className="bg-[#FFF9FA] py-20 sm:py-24">

      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <div className="text-center">

          <span className="text-[#B08D3B] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-[#17243D]">
            Still have questions?
          </h2>

          <p className="mt-4 text-gray-500">
            Here are a few things customers commonly ask.
          </p>

        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">

          {contactFAQ.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >

              <summary className="flex items-center justify-between gap-5 px-5 sm:px-6 py-5 cursor-pointer list-none">

                <span className="font-semibold text-[#17243D]">
                  {faq.question}
                </span>

                <Plus
                  size={20}
                  className="text-[#B08D3B] shrink-0 transition-transform duration-300 group-open:rotate-45"
                />

              </summary>

              <div className="px-5 sm:px-6 pb-5">

                <p className="text-sm text-gray-500 leading-7">
                  {faq.answer}
                </p>

              </div>

            </details>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactFAQ;