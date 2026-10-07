const FurnitureCategory = () => {
  const categories = [
    "All",
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Office",
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">

      {categories.map((category, index) => (
        <button
          key={category}
          type="button"
          className={
            index === 0
              ? "px-5 py-2 rounded-full bg-[#17243D] text-white text-sm font-medium"
              : "px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#DDBE70]"
          }
        >
          {category}
        </button>
      ))}

    </div>
  );
};

export default FurnitureCategory;