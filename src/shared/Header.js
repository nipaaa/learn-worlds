import React, { useState } from "react";
import logo from "../assets/logo/lw-logo.png";
import lock from "../assets/logo/lock-Icon.png";
import GradientBtn from "../utils/GradientBtn";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import bell from "../assets/illustration/bell.png";
import notficationbell from "../assets/illustration/bell-notified.png";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
const []=
  return (
    <div className="container mx-auto">
      <div class="navbar">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div class="dropdown dropdown-left">
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 pb-5 shadow 
       rounded-box w-52 gap-3"
          >
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a>
                <img src={lock} alt="" />
              </a>
            </li>
            <li>
              {user ? (
                <p>fjk</p>
              ) : (
                <Link to="/login">
                  <GradientBtn>Log In</GradientBtn>{" "}
                </Link>
              )}
            </li>
          </ul>

          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>

        <div class="navbar-start hidden lg:flex items-center">
          <ul class="menu menu-horizontal p-0 text-lg">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a>
                <img src={lock} alt="" />
              </a>
            </li>
            <li>
              {user ? (
                <div>
                  <img className="w-[23px]" src={bell} alt="" />
                  <img className="w-[23px]" src={notficationbell} alt="" />

                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn border-0 m-1">
                      <img
                        className="w-[36px] h-[36px] rounded-full object-cover border-[2px] border-[#1D1B1B]"
                        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                        alt=""
                      />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 border-[1px] border-[#acacacb3] bg-white rounded-[7px] w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <GradientBtn>Log In</GradientBtn>{" "}
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
