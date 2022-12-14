import React from 'react';
import BookNowBtn from '../../utils/BookNowBtn';
import star from "../../assets/logo/star.png";
import Halfstar from "../../assets/logo/half-star.png";

const CourseCard = ({course}) => {
    return (
        <div className='m-3 shadow rounded-2xl'>
        <div className={course.className}>
          <img className="mx-auto" src={course.pic} alt="" />
        </div>
        <div className="flex flex-col gap-y-4 px-3 pb-8">
            <div className='-mt-6 text-end'>
            <button className="btn border-0  bg-[#0A0762] hover:bg-[#0A0762] text-white p-2 rounded-lg">
            {course.name}
          </button>
            </div>
         
          <p className="text-[#31374C] text-[16px] font-[700]">
            {course.title}
          </p>
          <p className="text-[#444444] text-[14px]">{course.description}</p>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={Halfstar} alt="" />
            </div>
            <div>
              <p className="text-[#444444] text-[11px] font-[400]">
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