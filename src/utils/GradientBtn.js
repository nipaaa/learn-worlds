import React from "react";

const GradientBtn = ({ children }) => {
  return (
    <div>
      <a className="gradient_btn" href="#">
        {children}
      </a>
    </div>
  );
};

export default GradientBtn;
