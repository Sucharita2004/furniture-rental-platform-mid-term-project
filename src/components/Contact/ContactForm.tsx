import {
  ArrowRight,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";

const ContactForm = () => {
  return (
    <section
      id="contact-form"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <div>

            <span className="text-[#B08D3B] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
              Get In Touch
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17243D] leading-tight">
              Tell us
              <br />
              <span className="text-[#B08D3B]">
                what you need.
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-7 text-sm sm:text-base">
              Whether you are looking for a particular furniture piece,
              need help with a rental, or simply have a question, send us
              a message.
            </p>

            <div className="mt-8 flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-[#17243D] flex items-center justify-center">
                <MessageSquare
                  size={19}
                  className="text-[#DDBE70]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-[#17243D]">
                  We are listening.
                </p>

                <p className="text-xs text-gray-500">
                  Tell us what is on your mind.
                </p>
              </div>

            </div>

          </div>

          {/* FORM */}
          <form className="bg-[#FFF9FA] rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-gray-100">

            <div className="grid sm:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-[#17243D]">
                  Your Name
                </label>

                <div className="relative mt-2">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#DDBE70]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-[#17243D]">
                  Email Address
                </label>

                <div className="relative mt-2">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#DDBE70]"
                  />
                </div>
              </div>

            </div>

            {/* Subject */}
            <div className="mt-5">

              <label className="text-sm font-semibold text-[#17243D]">
                Subject
              </label>

              <select className="w-full mt-2 px-4 py-3.5 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#DDBE70] text-gray-600">
                <option>Select a subject</option>
                <option>Rental Inquiry</option>
                <option>Furniture Question</option>
                <option>Delivery</option>
                <option>Existing Order</option>
                <option>Other</option>
              </select>

            </div>

            {/* Message */}
            <div className="mt-5">

              <label className="text-sm font-semibold text-[#17243D]">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3.5 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#DDBE70] resize-none"
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#17243D] text-white font-bold hover:bg-[#DDBE70] hover:text-[#17243D] transition-all duration-300"
            >
              Send Message
              <ArrowRight size={18} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;