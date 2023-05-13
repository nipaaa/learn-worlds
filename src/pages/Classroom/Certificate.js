import React from "react";
import certificate from "../../assets/illustration/certificate.png";
import "./Certificate.css";

const Certificate = () => {
  return (
    <div className="text-center flex justify-center">
      <div>
        <img src={certificate} alt="" />
        <p className="font-[600] text-[30px] text-[#2E3331] my-[40px]">
          You Don't Have Any Certificate
        </p>
        <button className="browse-gradiant-btn w-[307px] h-[64px] rounded-[7px] font-[600] text-[24px] text-white">
          Browse Course
        </button>
      </div>
    </div>
  );
};

export default Certificate;
