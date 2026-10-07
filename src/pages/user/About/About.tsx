import AboutCTA from "../../../components/About/AboutCTA/AboutCTA";
import AboutHero from "../../../components/About/AboutHero/AboutHero";
import AboutStats from "../../../components/About/AboutStats/AboutStats";
import AboutStory from "../../../components/About/AboutStory/AboutStory";
import AboutValues from "../../../components/About/AboutValues/AboutValues";

const About = () => {
  return (
    <div className="w-full">

      <AboutHero />

      <AboutStory />

      <AboutValues />

      <AboutStats />

      <AboutCTA />

    </div>
  );
};

export default About;