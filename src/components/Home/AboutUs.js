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
    <div className="about_bg">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 py-48">
        <div>
          <img src={about} alt="" />
        </div>
        <div className="">
          <Title>
            <span className="text-start about_border">About Us</span>{" "}
          </Title>
          <Content>
            A ipsum est viverra varius lectus et tempus arcu massa egetpretium
            attellus tristique Amet euismod vel suspendisse nunc, ut ru
            egetpretium trum arcu .
          </Content>
          {aboutPoints.map((points, index) => (
            <Content key={index}>
              <img className="inline" src={rightArrow} alt="" /> {points.point}
            </Content>
          ))}
          <div>
            <BlueBtn>Learn More</BlueBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
