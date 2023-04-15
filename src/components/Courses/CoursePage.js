import React from "react";
import NewsLetters from "../Home/NewsLetters";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/course/course-banner.png";
import CoursesTab from "./CoursesTab";

const CoursePage = () => {
  return (
    <div>
      <SectionBanner
        bg="bg-[#F3718B]"
        route="Courses"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <CoursesTab/>
      <NewsLetters />
    </div>
  );
};

export default CoursePage;
