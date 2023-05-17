import React, { useState } from "react";
import AllCourse from "./AllCourse";

const CoursesTab = () => {
  const [activeMenu, setMenu] = useState(1);
  const [tab, setTab] = useState("All");
  const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "Product Design" },
    { id: 4, name: "Graphics Design" },
    { id: 5, name: "Digital Marketing" },
  ];
  const handleMenu = (data) => {
    setMenu(data?.id);
    setTab(data?.name);
  };
  return (
    <div>
      <div className="p-3 flex justify-center gap-[20px] mb-[30px] overflow-y-scroll">
        {tabs.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => handleMenu(tab)}
            className={`${activeMenu === tab?.id ? "activeTab" : "courseTab"}`}
          >
            {tab?.name}
          </button>
        ))}
      </div>

      <div>
        {activeMenu === 1 && <AllCourse />}
        {activeMenu === 2 && <AllCourse />}
        {activeMenu === 3 && <AllCourse />}
        {activeMenu === 4 && <AllCourse />}
        {activeMenu === 5 && <AllCourse />}
      </div>
    </div>
  );
};

export default CoursesTab;
