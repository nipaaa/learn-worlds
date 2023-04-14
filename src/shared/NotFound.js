import React from "react";
import err from "../assets/not-found/404.png";

const NotFound = () => {
  return (
    <div className="err container mb-[120px] mt-[60px]">
      <div className="flex  justify-center">
        <img className="mb-[60px]" src={err} alt="" />
      </div>
      <div>
        <h4>Oops!</h4>
        <p>
          We can’t seem to find the page <br /> you are looking for.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
