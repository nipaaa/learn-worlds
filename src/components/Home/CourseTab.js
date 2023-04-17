import React, { useState } from "react";
import Title from "../../utils/Title";
import Courses from "./Courses";

const CourseTab = () => {
  const [activeMenu, setMenu] = useState(1);
  const [tab, setTab] = useState("All");
  const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Graphics Design" },
    { id: 3, name: "Web Design" },
    { id: 4, name: "Animation VFX" },
  ];
  const handleMenu = (data) => {
    setMenu(data?.id);
    setTab(data?.name);
  };
  return (
    <div>
      <Title>
        <span>Our Courses</span>{" "}
      </Title>

      <div className="px-3 flex justify-center gap-[70px] mb-[30px] overflow-y-scroll">
        {tabs.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => handleMenu(tab)}
            className={`${activeMenu === tab?.id ? "tabActive" : "courseTab"}`}
          >
            {tab?.name}
          </button>
        ))}
      </div>

      <div>
        {activeMenu === 1 && <Courses />}
        {activeMenu === 2 && <Courses />}
        {activeMenu === 3 && <Courses />}
        {activeMenu === 4 && <Courses />}
      </div>
    </div>
  );
};

export default CourseTab;
