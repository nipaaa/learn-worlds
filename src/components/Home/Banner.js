import React from "react";
import banner from "../../assets/home/banner.png";
import BlueBtn from "../../utils/BlueBtn";
import GradientBtn from "../../utils/GradientBtn";
import student from "../../assets/logo/students.png";
import teacher from "../../assets/logo/teacher.png";
import course from "../../assets/logo/course.png";
import Content from "../../utils/Content";

const Banner = () => {
  const database = [
    {
      picture: student,
      amount: 3000,
      title: "Students",
    },
    {
      picture: teacher,
      amount: 150,
      title: "Teachers",
    },
    {
      picture: course,
      amount: 25,
      title: "Courses",
    },
  ];
  return (
    <div className="banner">
      <div className="container ">
        <div>
          <div>
            <h1>
              Experience <br /> limitless learning
            </h1>
            <p>
              An LMS gives you the ability to track the progress of learnersin
              the <br />
              course material. More precisely, you can track their
              understanding.
            </p>
            <div className="flex gap-12  items-center mb-[30px]">
              {database.map((data, index) => (
                <div key={index}>
                  <img className="mb-[15px]" src={data.picture} alt="" />
                  <p className="amount ">{data.amount} + </p>
                  <p className="title">
                    {data.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8">
              <GradientBtn>Book Now</GradientBtn>
              <BlueBtn>Learn More</BlueBtn>
            </div>
          </div>
          <div className="heroine"><img className="lg:-ml-36" src={banner} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
