import React from "react";
import instructor1 from "../../assets/home/instructor1.png";
import instructor2 from "../../assets/home/instructor2.png";
import instructor3 from "../../assets/home/instructor3.png";
import fb from "../../assets/icon/fb.png";
import ig from "../../assets/icon/ig.png";
import tw from "../../assets/icon/tw.png";
import md from "../../assets/icon/md.png";

const Instructor = () => {
  return (
    <div className="instructor">
      <div className="container pb-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
<div className="instructor_card">
          <img className="instructor_img" src={instructor1} alt="" />
          <div className="ml-16 text-white">
            <p className="text-[24px] font-[700]">Robert</p>
            <p className="text-[16px] font-[400]">UI/UX Expert</p>
          </div>
          <div className="instructor_icon">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={tw} alt="" />
            <img src={md} alt="" />
          </div>
        </div> <div className="instructor_card">
          <img className="instructor_img" src={instructor1} alt="" />
          <div className="ml-16 text-white">
            <p className="text-[24px] font-[700]">Robert</p>
            <p className="text-[16px] font-[400]">UI/UX Expert</p>
          </div>
          <div className="instructor_icon">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={tw} alt="" />
            <img src={md} alt="" />
          </div>
        </div> <div className="instructor_card">
          <img className="instructor_img" src={instructor1} alt="" />
          <div className="ml-16 text-white">
            <p className="text-[24px] font-[700]">Robert</p>
            <p className="text-[16px] font-[400]">UI/UX Expert</p>
          </div>
          <div className="instructor_icon">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={tw} alt="" />
            <img src={md} alt="" />
          </div>
        </div>
</div>


       



      </div>
    </div>
  );
};

export default Instructor;
