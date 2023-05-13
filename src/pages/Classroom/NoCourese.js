import React from "react";
import certificate from "../../assets/illustration/certificate.png";
import booked from "../../assets/illustration/booked.png";
import ongoing from "../../assets/illustration/ongoing.png";
import completed from "../../assets/illustration/completed.png";

const NoCourese = ({ content }) => {
  const { name, description } = content;
  return (
    <div className="text-center flex justify-center">
      <div>
        {name === "Booked" && <img src={booked} alt="" />}
        {name === "OnGoing" && <img src={ongoing} alt="" />}
        {name === "Completed" && <img src={completed} alt="" />}
        {name === "Certificate" && <img src={certificate} alt="" />}
        <p className="font-[600] text-[30px] text-[#2E3331] my-[40px]">
          {description}
        </p>
        <button className="browse-gradiant-btn w-[307px] h-[64px] rounded-[7px] font-[600] text-[24px] text-white">
          Browse Course
        </button>
      </div>
    </div>
  );
};

export default NoCourese;
