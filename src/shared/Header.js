import React from "react";
import logo from "../assets/logo/lw-logo.png";
import lock from "../assets/logo/lock-Icon.png";
import GradientBtn from "../utils/GradientBtn";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div class="navbar">
        <a href="#">
          <img src={logo} alt="" />
        </a>
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
              <a>About Us</a>
            </li>
            <li>
              <a>Event</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>
                <img src={lock} alt="" />
              </a>
            </li>
            <li>
              <a>
                <GradientBtn>Log In</GradientBtn>{" "}
              </a>
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
              <a>About Us</a>
            </li>
            <li>
              <a>Event</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>
                <img src={lock} alt="" />
              </a>
            </li>
            <li>
              <a>
                <GradientBtn>Log In</GradientBtn>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
