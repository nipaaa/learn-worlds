import React from "react";
import Title from "../../utils/Title";
import varsha from "../../assets/home/varsha.png";

const StudentsSay = () => {
  return (
    <div className="students_say mb-[120px]">
      <div className="container">
        <Title>
          <span>What Our Students Say</span>
        </Title>
        <div className="flex items-center gap-[30px]">
          <div className="">
            <img src={varsha} alt="" />
          </div>
          <div className="content">
            <p className="review">
              I am satisfied with the training given by XYZ Pvt. Ltd on Web
              Designing. During training, the faculty was able to clear my
              doubts regarding design process.
            </p>
            <p className="name">Varsha Adhikari</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsSay;
