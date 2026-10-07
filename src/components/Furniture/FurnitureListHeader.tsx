const FurnitureListHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

      <div>
        <p className="text-[#B08D3B] text-sm font-semibold uppercase tracking-wider">
          Explore
        </p>

        <h2 className="text-3xl font-bold text-[#17243D] mt-1">
          Furniture Collection
        </h2>
      </div>

      {/* Sort */}
      <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-600 outline-none">
        <option>Sort By</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Highest Rated</option>
      </select>

    </div>
  );
};

export default FurnitureListHeader;