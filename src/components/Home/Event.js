import React from "react";
import Title from "../../utils/Title";
import mobile from "../../assets/home/mobile-app.png";
import blueprint from "../../assets/home/blueprint.png";
import location from "../../assets/logo/location.png";
import clock from "../../assets/logo/clock.png";
import calender from "../../assets/logo/calender.png";
import GradientBtn from "../../utils/GradientBtn";

const Event = () => {
  return (
    <div className="container">
      <Title>
        <span className="title_border">Join Event</span>
      </Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-12">
        <div className="rounded-lg">
          <img className="w-full" src={mobile} alt="" />

          <div className="bg-[#EEEEEE] p-4 flex flex-col gap-y-8">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img className="me-1" src={location} alt="" />
                <p className="text-[#5F6765] text-[14px]"> Dhaka</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={clock} alt="" />
                <p className="text-[#5F6765] text-[14px]">12.00 PM-03.00 AM</p>
              </div>
            </div>
            <p className="text-[#31374C] text-[16px] font-[600]">Web Development and Mobile app Development</p>
            <hr />
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img className="me-1" src={calender} alt="" />
                <p className="text-[#5F6765] text-[14px]"> 20 June 2022</p>
              </div>
              <div className="flex items-center gap-3">
                <GradientBtn>Join Event</GradientBtn>
              </div>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
};

export default Event;
