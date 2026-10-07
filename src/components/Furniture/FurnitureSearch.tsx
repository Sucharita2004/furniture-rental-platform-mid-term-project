import { FiSearch, FiSliders } from "react-icons/fi";

const FurnitureSearch = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-8">

      <div className="flex flex-col lg:flex-row gap-4 items-center">

        {/* Search */}
        <div className="relative flex-1 w-full">
          <FiSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search furniture..."
            className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#DDBE70]"
          />
        </div>

        {/* Category */}
        <select className="w-full lg:w-52 px-4 py-3.5 rounded-xl border border-gray-200 outline-none text-gray-600">
          <option>All Categories</option>
          <option>Living Room</option>
          <option>Bedroom</option>
          <option>Dining Room</option>
          <option>Office</option>
        </select>

        {/* Search Button */}
        <button
          type="button"
          className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#17243D] text-white font-semibold hover:bg-[#DDBE70] hover:text-[#17243D] transition"
        >
          <FiSliders size={18} />
          Search
        </button>

      </div>
    </div>
  );
};

export default FurnitureSearch;