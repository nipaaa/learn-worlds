import React from "react";
import about from "../../assets/home/about.png";
import BlueBtn from "../../utils/BlueBtn";
import Content from "../../utils/Content";
import Title from "../../utils/Title";
import rightArrow from "../../assets/logo/right-arrow.png";

const AboutUs = () => {
  const aboutPoints = [
    {
      point: "Flexibility and Self-Paced Learning.",
    },
    {
      point: "Demonstrated Self-Motivation",
    },
    {
      point: "Improved Virtual Communication and Collaboration",
    },
  ];
  return (
    <div className="about pb-[120px]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[95px] items-center">
        <div>
          <img src={about} alt="" />
        </div>
        <div className="">
          <Title>
            <span className="mb-[28.56px]">About Us</span>{" "}
          </Title>
          <p>
            A ipsum est viverra varius lectus et tempus arcu massa egetpretium
            attellus tristique Amet euismod vel suspendisse nunc, ut ru
            egetpretium trum arcu .
          </p>
          <div className="mb-[30px]">
            {aboutPoints.map((points, index) => (
              <div className="flex gap-[30px] items-center" key={index}>
                <img className="inline" src={rightArrow} alt="" />
                <p>{points.point}</p>
              </div>
            ))}
          </div>

          <div></div>
          <BlueBtn>Learn More</BlueBtn>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
