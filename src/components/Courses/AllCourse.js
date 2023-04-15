import React from "react";
import CourseCard from "../Home/CourseCard";
import web from "../../assets/home/web.png";
import graphic from "../../assets/home/graphic.png";
import digital from "../../assets/home/digital.png";
import uiUx from "../../assets/home/ui-ux.png";

const AllCourse = () => {
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
  return (
    <div className="container mb-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[px] mb-[60px]">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
