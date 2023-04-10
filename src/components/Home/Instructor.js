import React from "react";
import instructor1 from "../../assets/home/instructor1.png";
import instructor2 from "../../assets/home/instructor2.png";
import instructor3 from "../../assets/home/instructor3.png";

const Instructor = () => {
  return (
    <div>
      <div className="container pb-12">
        <img className="instructor" src={instructor1} alt="" />
        <div className="ml-16 text-white">
          <p className="text-[24px] font-[700]">Robert</p>
          <p className="text-[16px] font-[400]">UI/UX Expert</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
