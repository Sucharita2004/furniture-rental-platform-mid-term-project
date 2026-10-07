import FurnitureBanner from "../../../components/Furniture/FurnitureBanner";
import FurnitureCategory from "../../../components/Furniture/FurnitureCategory";
import FurnitureListHeader from "../../../components/Furniture/FurnitureListHeader";
import FurnitureSearch from "../../../components/Furniture/FurnitureSearch";
import FurnitureCard from "../../../components/Home/HomeFeatured/FurnitureCard";
import furniture from "../../../services/json/furniture.json";



const FurnitureList = () => {
  return (
    <div className="min-h-screen bg-[#FFF9FA]">

      {/* Banner */}
      <FurnitureBanner />

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* Search */}
        <FurnitureSearch />

        {/* Title + Sort */}
        <FurnitureListHeader />

        {/* Categories */}
        <FurnitureCategory />

        {/* Furniture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {furniture.map((item) => (
            <FurnitureCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </section>
    </div>
  );
};

export default FurnitureList;