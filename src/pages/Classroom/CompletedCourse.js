import React from "react";
import ClassroomCard from "./ClassroomCard";
import NoCourese from "./NoCourese";

const CompletedCourse = () => {
  const courses = [];

  if (courses.length === 0) {
    return (
      <NoCourese
        content={{
          name: "Completed",
          description: "You Don't Have Any Course Completed",
        }}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[30px]">
      {courses.map((item, idx) => (
        <ClassroomCard key={idx} />
      ))}
    </div>
  );
};

export default CompletedCourse;
