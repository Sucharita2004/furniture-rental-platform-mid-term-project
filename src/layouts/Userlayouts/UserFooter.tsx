import { Mail, MapPin, Phone } from "lucide-react";

import { BsInstagram, BsTwitter } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

const UserFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17243D] text-white overflow-hidden">
      {/* ================= FOOTER ================= */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* BRAND */}

          <div className="lg:col-span-5">
            <NavLink to="/" className="inline-flex items-center">
              <img
                src="/furnirent-logo.png"
                alt="FurniRent Logo"
                className="w-36 sm:w-40 h-auto object-contain"
              />
            </NavLink>

            <p className="mt-5 max-w-sm text-gray-400 text-sm leading-7">
              Smart furniture rental for modern living. Find the right pieces,
              rent with ease and transform your space your way.
            </p>

            {/* Social Icons */}

            <div className="flex items-center gap-3 mt-7">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#DDBE70] hover:text-[#17243D] hover:border-[#DDBE70] transition-all duration-300"
              >
                <BsInstagram size={17} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#DDBE70] hover:text-[#17243D] hover:border-[#DDBE70] transition-all duration-300"
              >
                <FaFacebook size={17} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#DDBE70] hover:text-[#17243D] hover:border-[#DDBE70] transition-all duration-300"
              >
                <BsTwitter size={17} />
              </a>
            </div>
          </div>

          {/* EXPLORE */}

          <div className="lg:col-span-2">
            <p className="text-[#DDBE70] text-xs uppercase tracking-[0.2em] font-bold mb-5">
              Explore
            </p>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                About
              </Link>

              <Link
                to="/furniture"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Furniture
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ACCOUNT */}

          <div className="lg:col-span-2">
            <p className="text-[#DDBE70] text-xs uppercase tracking-[0.2em] font-bold mb-5">
              Account
            </p>

            <div className="flex flex-col gap-3">
              <Link
                to="/profile"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                My Profile
              </Link>

              <Link
                to="/wishlist"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Cart
              </Link>

              <Link
                to="/orders"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                My Orders
              </Link>
            </div>
          </div>

          {/* CONTACT */}

          <div className="lg:col-span-3">
            <p className="text-[#DDBE70] text-xs uppercase tracking-[0.2em] font-bold mb-5">
              Get in touch
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#DDBE70] mt-1 shrink-0" />

                <div>
                  <p className="text-xs text-gray-500">Email</p>

                  <p className="text-sm text-gray-300 mt-1">
                    hello@furnirent.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#DDBE70] mt-1 shrink-0" />

                <div>
                  <p className="text-xs text-gray-500">Phone</p>

                  <p className="text-sm text-gray-300 mt-1">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#DDBE70] mt-1 shrink-0" />

                <div>
                  <p className="text-xs text-gray-500">Studio</p>

                  <p className="text-sm text-gray-300 mt-1">Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NEWSLETTER ================= */}

      <div className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Stay in the loop.
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Get furniture inspiration and rental updates.
              </p>
            </div>

            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-72 px-5 py-3.5 bg-white/5 border border-white/10 rounded-l-xl outline-none text-sm text-white placeholder:text-gray-500 focus:border-[#DDBE70] transition"
              />

              <button
                type="button"
                className="px-5 sm:px-7 py-3.5 bg-[#DDBE70] text-[#17243D] font-bold rounded-r-xl hover:bg-[#E8CE88] transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} FurniRent. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#DDBE70] transition">
              Privacy
            </Link>

            <Link to="/" className="hover:text-[#DDBE70] transition">
              Terms
            </Link>

            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />

            <span>Made for modern living.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
