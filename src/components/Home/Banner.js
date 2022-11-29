import React from "react";
import hero from "../../assets/home/hero.png";
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
    <div className="banner_bg py-24">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-[#31374D] text-[74px] font-bold">
              Experience <br /> limitless learning
            </h1>
            <Content>
              An LMS gives you the ability to track the progress of learnersin
              the <br />
              course material. More precisely, you can track their
              understanding.
            </Content>
            <div className="flex gap-12  items-center mb-8">
              {database.map((data, index) => (
                <div className="flex flex-col gap-y-3" key={index}>
                  <img src={data.picture} alt="" />
                  <p className="text-[20px] text-[#31374D] font-bold">
                    {data.amount} +{" "}
                  </p>
                  <p className="text-[16px] text-[rgba(68, 68, 68, 0.85)]">
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
          <div>
            <img className="lg:-ml-36" src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
