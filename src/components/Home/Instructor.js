import React from "react";
import instructor1 from "../../assets/home/instructor1.png";
import instructor2 from "../../assets/home/instructor2.png";
import instructor3 from "../../assets/home/instructor3.png";
import fb from "../../assets/icon/fb.png";
import ig from "../../assets/icon/ig.png";
import tw from "../../assets/icon/tw.png";
import md from "../../assets/icon/md.png";
import Title from "../../utils/Title";

const Instructor = () => {
  const instructors = [
    {
      pic: instructor1,
      name: "Robert",
      expertise: "UI/UX Expert",
    },
    {
      pic: instructor2,
      name: "Angelou",
      expertise: "Graphics Design",
    },
    {
      pic: instructor3,
      name: "Smith",
      expertise: "Digital Marketing",
    },
  ];
  return (
    <div className="instructor mb-[120px]">
      <div className="container pb-12">
        <Title>
          <span>Meet The Instructors</span>
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[68px]">
          {instructors.map((instructor, index) => (
            <div key={index} className="instructor_card">
              <img className=" instructor_img" src={instructor.pic} alt="" />
              <div className="description ml-16 text-white">
                <p className="text-[24px] font-[700]">{instructor.name}</p>
                <p className="text-[16px] font-[400]">{instructor.expertise}</p>
              </div>
              <div className="instructor_icon">
                <img src={fb} alt="" />
                <img src={ig} alt="" />
                <img src={tw} alt="" />
                <img src={md} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
