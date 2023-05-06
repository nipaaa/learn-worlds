import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/lw-logo.png";

const AuthHeader = () => {
  return (
    <section className="container mx-auto flex justify-between items-center z-50 relative py-[20px]">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-[24px]">
        <p className="font-[400] text-[18px]">Dont't have any account?</p>
        <div>
          <button className="gradient_btn">Register</button>
        </div>
      </div>
    </section>
  );
};

export default AuthHeader;
