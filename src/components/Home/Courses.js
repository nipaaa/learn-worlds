import React from "react";
import web from "../../assets/home/web.png";
import graphic from "../../assets/home/graphic.png";
import digital from "../../assets/home/digital.png";
import uiUx from "../../assets/home/ui-ux.png";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "./CourseCard";
import Carousel from "react-multi-carousel";
import BlueBtn from "../../utils/BlueBtn";
import { Link } from "react-router-dom";
import Title from "../../utils/Title";

const Courses = () => {
  const courses = [
    {
      pic: web,
      name: "Jhon Smith",
      title: "Web Design",
      description:
        "Donec facilisi quis aliquam cursus posuere in interdum consectetur ",
      price: 2000,
      className: "bg-[#BEB1E9] py-[20px]  rounded-t-2xl",
    },
    {
      pic: graphic,
      name: "Jhon Smith",
      title: "Graphics Design",
      description:
        "Donec facilisi quis aliquam cursus posuere in interdum consectetur ",
      price: 2000,
      className: "bg-[#B1E3DC] py-[20px]  rounded-t-2xl",
    },
    {
      pic: digital,
      name: "Jhon Smith",
      title: "Digital Marketing",
      description:
        "Donec facilisi quis aliquam cursus posuere in interdum consectetur ",
      price: 2000,
      className: "bg-[#B1D6E9] py-[20px] rounded-t-2xl",
    },
    {
      pic: uiUx,
      name: "Jhon Smith",
      title: "UI/UX Design",
      description:
        "Donec facilisi quis aliquam cursus posuere in interdum consectetur ",
      price: 2000,
      className: "bg-[#B7C8FF] py-[20px]  rounded-t-2xl",
    },
    {
      pic: digital,
      name: "Jhon Smith",
      title: "Digital Marketing",
      description:
        "Donec facilisi quis aliquam cursus posuere in interdum consectetur ",
      price: 2000,
      className: "bg-[#B1D6E9] py-[20px] rounded-t-2xl",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" mb-[120px]">
      <div className="container">
        <Title>
          <span>Our Courses</span>{" "}
        </Title>
        <Carousel responsive={responsive} infinite={true} swipeable={true}>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course}></CourseCard>
          ))}
        </Carousel>
        <div className="text-center mt-5">
          <Link to="/courses">
            <BlueBtn>View More</BlueBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
