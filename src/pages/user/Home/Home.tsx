import HomeBanner from "../../../components/Home/HomeBanner/HomeBanner";
import HomeCategories from "../../../components/Home/HomeCatagories/HomeCategories";

import HomeCTA from "../../../components/Home/HomeCTA/homeCTA";
import HomeFeatured from "../../../components/Home/HomeFeatured/HomeFeatured";
import MostPopularFurniture from "../../../components/Home/MostPopularFurniture/MostPopularFurniture";

import NewFurniture from "../../../components/Home/NewFurniture/NewFurniture";
import RentalBenefits from "../../../components/Home/RentalBenefits/RentalBenifits";
import RentalWork from "../../../components/Home/RentalWork/RentalWork";

import Testimonials from "../../../components/Home/Testimonial/Testimoninal";
import furnitureData from "../../../services/json/furniture.json";

const Home = () => {
  return (
    <div className="w-full bg-[#FFF9FA]">
      {/* Banner */}
      <HomeBanner />

      {/* Home categories */}
      <HomeCategories />

      {/* Featured Furniture */}
      <HomeFeatured furnitureData={furnitureData} />

      {/* NewFurniture  */}
      <NewFurniture furnitureData={furnitureData} />

      {/* Popular Furniture */}
      <MostPopularFurniture furnitureData={furnitureData} />

      {/* RentalBenefits */}
      <RentalBenefits />

      {/* RentalWork */}
      <RentalWork />

      {/* Testimonials */}
      <Testimonials />

      {/* HomeCTA  */}
      <HomeCTA />
    </div>
  );
};

export default Home;

