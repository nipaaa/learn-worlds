import React from "react";
import banner from "../../assets/home/banner.png";
import BlueBtn from "../../utils/BlueBtn";
import GradientBtn from "../../utils/GradientBtn";
import student from "../../assets/logo/students.png";
import teacher from "../../assets/logo/teacher.png";
import course from "../../assets/logo/course.png";
import expert from "../../assets/home/expert.png";
import collection from "../../assets/home/collection.png";
import { motion } from "framer-motion";

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
            <p className="content">
              An LMS gives you the ability to track the progress of learnersin
              the <br />
              course material. More precisely, you can track their
              understanding.
            </p>
            <div className="flex gap-[30px]  items-center mb-[30px]">
              {database.map((data, index) => (
                <div key={index}>
                  <img className="mb-[15px]" src={data.picture} alt="" />
                  <p className="amount ">{data.amount} + </p>
                  <p className="title">{data.title}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-[60px] lg:gap-[30px]">
              <GradientBtn>Book Now</GradientBtn>
              <BlueBtn>Learn More</BlueBtn>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="heroine ">
              <img className="lg:-ml-36" src={banner} alt="" />
            </div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: -120 }}
              transition={{
                delay: 0.2,
                duration: 2,
                type: "spring",
                stiffness: 20,
              }}
              className="expert flex items-center gap-[20px]"
            >
              <img src={expert} alt="" />
              <p>Expert Instructors</p>
            </motion.div>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.2,
                duration: 2,
                type: "spring",
                stiffness: 20,
              }}
              className="collection flex items-center gap-[20px]"
            >
              <img src={collection} alt="" />
              <p>
                Largest Collection <br />
                For Every Course
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
