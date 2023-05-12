import React from "react";
import BookNowBtn from "../../utils/BookNowBtn";
import star from "../../assets/logo/star.png";
import Halfstar from "../../assets/logo/half-star.png";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="m-[15px] carousel_card">
      <div className={course.className}>
        <Link to="/courseDetails">
          <img className="mx-auto" src={course.pic} alt="" />
        </Link>
      </div>
      <div className="flex flex-col gap-y-[15px] px-[15px] pb-[20px]">
        <div className="-mt-5 text-end">
          <button className="course_name">{course.name}</button>
        </div>

        <p className="course_title">{course.title}</p>
        <p className="course_description">{course.description}</p>
        <div className="flex gap-[10px]">
          <div className="flex gap-[4px]">
            <img className="w-[12px] h-[12px]" src={star} alt="" />
            <img className="w-[12px] h-[12px]" src={star} alt="" />
            <img className="w-[12px] h-[12px]" src={star} alt="" />
            <img className="w-[12px] h-[12px]" src={star} alt="" />
            <img className="w-[12px] h-[12px]" src={Halfstar} alt="" />
          </div>
          <div>
            <p className="font-[poppins] text-[#444444] text-[11px] font-[400]">
              4.5 ( 50 review)
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[ #143A4A]  text-[14px] font-[700]">
            TK {course.price}
          </p>
          <BookNowBtn>Book Now</BookNowBtn>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
