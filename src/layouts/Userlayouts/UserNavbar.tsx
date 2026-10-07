import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const UserNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#17243D]/70 backdrop-blur-xl border-b border-[#DDBE70]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* ================= LOGO ================= */}

          <NavLink to="/" className="flex items-center shrink-0">
            <img
              src="/furnirent-logo.png"
              alt="FurniRent Logo"
              className="w-50 h-30 object-contain"
            />
          </NavLink>

          {/* ================= NAVIGATION LINKS ================= */}

          <div className="flex items-center gap-3">
            {/* Home */}

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#DDBE70] text-[#17243D] shadow-md"
                    : "text-white hover:bg-[#DDBE70]/90 hover:text-[#17243D]"
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#DDBE70] text-[#17243D] shadow-md"
                    : "text-white hover:bg-[#DDBE70]/90 hover:text-[#17243D]"
                }`
              }
            >
              About
            </NavLink>

            {/* Furniture */}

            <NavLink
              to="/furniture"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#DDBE70] text-[#17243D] shadow-md"
                    : "text-white hover:bg-[#DDBE70]/90 hover:text-[#17243D]"
                }`
              }
            >
              Furniture
            </NavLink>

            {/* Contact */}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#DDBE70] text-[#17243D] shadow-md"
                    : "text-white hover:bg-[#DDBE70]/90 hover:text-[#17243D]"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* ================= LOGIN ================= */}

          <NavLink
            to="/login"
            className="
              flex
              items-center
              gap-2
              px-6
              py-2.5
              rounded-full
              border
              border-[#DDBE70]
              text-white
              font-medium
              transition-all
              duration-300
              hover:bg-[#DDBE70]
              hover:text-[#17243D]
            "
          >
            <FiLogIn size={18} />
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
