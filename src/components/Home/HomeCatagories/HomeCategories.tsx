import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


import CategoryCard from "./CategoryCard";
import categories from "../../../services/json/categories.json";

const HomeCategories = () => {
  return (
    <section className="w-full bg-[#FFF9FA] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6">

          <div className="text-center md:text-left">

            <p className="text-[#B08D3B] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
              Explore Collection
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17243D] mt-2">
              Shop by Category
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-6 sm:leading-7 max-w-xl mt-3 mx-auto md:mx-0">
              Find the perfect furniture for every room in your home.
              Choose a category and explore our collection.
            </p>

          </div>

        
          <Link
            to="/furniture"
            className="
              hidden sm:flex
              items-center justify-center gap-2
              text-sm font-semibold
              text-[#17243D]
              hover:text-[#B08D3B]
              transition-colors
            "
          >
            View All Furniture
            <ArrowRight size={17} />
          </Link>

        </div>

        {/* Category Cards */}
        <div
          className="
            grid grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-3 sm:gap-4 md:gap-5
            mt-8 sm:mt-10
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

    
        <div className="flex sm:hidden justify-center mt-7">
          <Link
            to="/furniture"
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              rounded-full
              bg-[#17243D]
              text-white
              text-sm font-semibold
              hover:bg-[#DDBE70]
              hover:text-[#17243D]
              transition-all duration-300
            "
          >
            View All Furniture
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeCategories;