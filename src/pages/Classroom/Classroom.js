import React, { useState } from "react";
import BookedCourse from "./BookedCourse";
import OnGoingCourse from "./OnGoingCourse";
import CompletedCourse from "./CompletedCourse";
import Certificate from "./Certificate";

const Classroom = () => {
  const [activeTab, setActiveTab] = useState("Booked");
  return (
    <section className=" container mt-[139px] mb-[235px]">
      <h3 className="font-[700] text-[50px] text-[#31374D] mb-[60px]">
        Classroom
      </h3>
      <div className="flex gap-[20px] mb-[45px]">
        <button
          className={` w-[220px] h-[64px] rounded-[5px] font-[500] text-[10px] md:text-[16px] lg:text-[20px] ${
            activeTab === "Booked"
              ? "text-[#FFFFFF] bg-[#FF6E33]"
              : "text-[#2E3331] bg-[#FFE5CF]"
          }`}
          onClick={() => setActiveTab("Booked")}
        >
          Booked Courses(0)
        </button>
        <button
          className={` w-[220px] h-[64px] rounded-[5px] font-[500] text-[10px] md:text-[16px] lg:text-[20px] ${
            activeTab === "OnGoing"
              ? "text-[#FFFFFF] bg-[#FF6E33]"
              : "text-[#2E3331] bg-[#FFE5CF]"
          }`}
          onClick={() => setActiveTab("OnGoing")}
        >
          On-going Course
        </button>
        <button
          className={` w-[220px] h-[64px] rounded-[5px] font-[500] text-[10px] md:text-[16px] lg:text-[20px] ${
            activeTab === "Completed"
              ? "text-[#FFFFFF] bg-[#FF6E33]"
              : "text-[#2E3331] bg-[#FFE5CF]"
          }`}
          onClick={() => setActiveTab("Completed")}
        >
          Course-completed
        </button>
        <button
          className={` w-[220px] h-[64px] rounded-[5px] font-[500] text-[10px] md:text-[16px] lg:text-[20px] ${
            activeTab === "Certificate"
              ? "text-[#FFFFFF] bg-[#FF6E33]"
              : "text-[#2E3331] bg-[#FFE5CF]"
          }`}
          onClick={() => setActiveTab("Certificate")}
        >
          Certificate
        </button>
      </div>
      {activeTab === "Booked" && <BookedCourse />}
      {activeTab === "OnGoing" && <OnGoingCourse />}
      {activeTab === "Completed" && <CompletedCourse />}
      {activeTab === "Certificate" && <Certificate />}
    </section>
  );
};

export default Classroom;
