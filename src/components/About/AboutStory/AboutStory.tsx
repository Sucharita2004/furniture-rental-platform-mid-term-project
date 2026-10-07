import { Home, Sofa } from "lucide-react";
import StoryImage from "./StoryImage";

import StoryFeatureCard from "./StoryFeatureCard";
import StoryPoints from "./Storypoint";

const AboutStory = () => {
  return (
    <section
      id="our-story"
      className="bg-[#FFF9FA] py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <StoryImage />

          {/* CONTENT */}
          <div>
            <span className="text-[#B08D3B] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17243D] leading-tight">
              A better way to
              <br />
              <span className="text-[#B08D3B]">
                furnish life.
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-7 text-sm sm:text-base">
              FurniRent is built around a simple idea: furniture should make
              your space feel better without making your life complicated.
            </p>

            <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
              Instead of making every furniture decision permanent, our rental
              experience gives customers the flexibility to explore furniture
              according to their space, lifestyle and needs.
            </p>

            {/* Points */}
            <StoryPoints />

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              <StoryFeatureCard
                icon={Home}
                title="Your Space"
                description="Furniture for every corner."
              />

              <StoryFeatureCard
                icon={Sofa}
                title="Your Style"
                description="Choose pieces that fit you."
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;