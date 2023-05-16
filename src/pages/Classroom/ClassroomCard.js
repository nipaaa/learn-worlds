import React from "react";
import "./Classroom.css";

const ClassroomCard = () => {
  return (
    <div className="flex items-end gap-[20px] p-[20px] bg-[#FAFCFF] rounded-[15px] card-dropShadow">
      <img
        src="https://media.istockphoto.com/id/1300822108/photo/group-of-unrecognisable-international-students-having-online-meeting.jpg?s=612x612&w=0&k=20&c=-X6IUTSdDMfJrFdQFhrDuwhnMrM1BLjfrLzydpibCTA="
        alt=""
        className="w-[110px] h-[102px] rounded-[15px] object-cover"
      />
      <div>
        <h4 className="font-[600] text-[18px] text-[#2E3331] mb-[5px]">
          Graphics Design
        </h4>
        <p className="font-[400] text-[15px] text-[#8A9995] mb-[8px]">
          BY John Smith
        </p>
        <button className="start-gradiant-btn">Start</button>
      </div>
    </div>
  );
};

export default ClassroomCard;
