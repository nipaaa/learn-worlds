import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/lw-logo.png";

const AuthHeader = ({ page }) => {
  return (
    <section className="container mx-auto flex justify-between items-center z-50 relative py-[20px]">
      <div>
        <Link to="/">
          <img className="w-[200px] md:w-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-[24px]">
        <p className="font-[400] text-[18px] hidden lg:block">
          {page?.description}
        </p>
        <div>
          <Link to={`${page?.link}`}>
            <button className="header_btn ">{page?.name}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthHeader;
