import React from "react";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/about/about-banner.png";
import AboutUs from "../Home/AboutUs";
import Instructor from "../Home/Instructor";
import GlobalOnline from "./GlobalOnline";
import Register from "./Register";
import AboutCarousel from "./AboutCarousel";

const AboutPage = () => {
  return (
    <div>
      <SectionBanner
        bg="bg-[#2C8A9D]"
        route="About Us"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <AboutUs />
      <GlobalOnline />
      <Register />
      <Instructor />
      <AboutCarousel/>
    </div>
  );
};

export default AboutPage;
