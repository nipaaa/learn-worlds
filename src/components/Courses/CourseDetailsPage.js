import React from "react";
import SectionBanner from "../../utils/SectionBanner";
import banner from "../../assets/course/course-banner.png";
import CourseDetails from "./CourseDetails";

const CourseDetailsPage = () => {
  return (
    <div>
      <SectionBanner
        bg="bg-[#F3718B]"
        route="Course details"
        content="At ipsum est viverra varius lectus et tempus arcu massa egetpretium at tellus tristique Amet euismod vel suspendisse nunc, ut ru egetpretium trum arcu egetpretium morbi"
        bannerImg={banner}
      />
      <CourseDetails/>
    </div>
  );
};

export default CourseDetailsPage;
