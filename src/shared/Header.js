import React, { useState } from "react";
import logo from "../assets/logo/lw-logo.png";
import lock from "../assets/logo/lock-Icon.png";
import GradientBtn from "../utils/GradientBtn";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bell from "../assets/illustration/bell.png";
import notficationbell from "../assets/illustration/bell-notified.png";
import profile from "../assets/icon/profile.png";
import classroom from "../assets/icon/classroom.png";
import history from "../assets/icon/history.png";
import password from "../assets/icon/change-password.png";
import exit from "../assets/icon/exit.png";
import { userLoggedOut } from "../features/auth/authSlice";

const Header = () => {
  const { auth, notification } = useSelector((state) => state);
  const { notification: notificationData } = notification;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLoggedOut());
  };

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
              {auth?.user ? (
                <>
                  {/* <div>
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
                        className="dropdown-content menu border-[1px] px-[30px] py-[20px] border-[#acacacb3] bg-white rounded-[7px] "
                      >
                        <li className="border-b-[1px] border-[#74747466]">
                          <div className="flex items-center px-0">
                            <div className="w-[36px] h-[36px] rounded-full">
                              <img
                                className="w-full h-full rounded-full object-cover border-[2px] border-[#1D1B1B]"
                                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                                alt=""
                              />
                            </div>
                            <div className="mt-2">
                              <h5 className="font-[600] text-[14px] text-[#363D50]  leading-[0]">
                                Mohiuddin Khan
                              </h5>
                              <p className="font-[400] text-[10px] text-[#363d50d9] p-0 m-0">
                                mohi.opediatech@gmail.com
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex flex-col gap-[15px] mt-[14px]">
                          <Link className="w-full p-0">
                            <img
                              className="w-[18px] h-[18px] object-contain"
                              src={profile}
                              alt=""
                            />
                            <p className="font-[400] text-[14px] text-[#777777]">
                              Profile
                            </p>
                          </Link>
                          <Link className="w-full p-0">
                            <img
                              className="w-[18px] h-[18px] object-contain"
                              src={classroom}
                              alt=""
                            />
                            <p className="font-[400] text-[14px] text-[#777777]">
                              Classroom
                            </p>
                          </Link>
                          <Link className="w-full p-0">
                            <img
                              className="w-[18px] h-[18px] object-contain"
                              src={history}
                              alt=""
                            />
                            <p className="font-[400] text-[14px] text-[#777777]">
                              Payment History
                            </p>
                          </Link>
                          <Link className="w-full p-0">
                            <img
                              className="w-[18px] h-[18px] object-contain"
                              src={password}
                              alt=""
                            />
                            <p className="font-[400] text-[14px] text-[#777777]">
                              Change Password
                            </p>
                          </Link>
                          <Link className="w-full p-0">
                            <img
                              className="w-[18px] h-[18px] object-contain"
                              src={exit}
                              alt=""
                            />
                            <p className="font-[400] text-[14px] text-[#777777]">
                              Logout
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </>
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
              {auth?.user ? (
                <div>
                  {notificationData.length > 0 ? (
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <label tabIndex={0} className="btn border-0 ">
                        <img
                          className="w-[23px]"
                          src={notficationbell}
                          alt=""
                        />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-[20px]  border-[1px]  border-[#acacacb3] bg-white rounded-[7px] w-[243px]"
                      >
                        <p className="font-[600] text-[14px] text-[#363D50]">
                          Notification
                        </p>
                        {notificationData.map((item, idx) => (
                          <li className="border-b-[1px] border-[#74747466] ">
                            <p className="font-[400] text-[12px] text-[#000000d9] leading-5 pt-[18px] pb-0 px-[5px]">
                              {item?.topic}
                            </p>
                            <p className="font-[400] text-[9px] text-[#777777] pt-0 px-[5px]">
                              {item?.date}
                            </p>
                          </li>
                        ))}
                        <p className="font-[400] text-[12px] text-[#2172F2] mt-[11px]">
                          View all notification
                        </p>
                      </ul>
                    </div>
                  ) : (
                    <img className="w-[23px]" src={bell} alt="" />
                  )}

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
                      className="dropdown-content menu border-[1px] px-[30px] py-[20px] border-[#acacacb3] bg-white rounded-[7px] "
                    >
                      <li className="border-b-[1px] border-[#74747466]">
                        <div className="flex items-center px-0">
                          <div className="w-[36px] h-[36px] rounded-full">
                            <img
                              className="w-full h-full rounded-full object-cover border-[2px] border-[#1D1B1B]"
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                            />
                          </div>
                          <div className="mt-2">
                            <h5 className="font-[600] text-[14px] text-[#363D50]  leading-[0]">
                              Mohiuddin Khan
                            </h5>
                            <p className="font-[400] text-[10px] text-[#363d50d9] p-0 m-0">
                              mohi.opediatech@gmail.com
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex flex-col gap-[15px] mt-[14px] ">
                        <Link className="w-full p-0 " to="/account">
                          <img
                            className="w-[18px] h-[18px] object-contain"
                            src={profile}
                            alt=""
                          />
                          <p className="font-[400] text-[14px] text-[#777777]">
                            Profile
                          </p>
                        </Link>
                        <Link className="w-full p-0" to="/classroom">
                          <img
                            className="w-[18px] h-[18px] object-contain"
                            src={classroom}
                            alt=""
                          />
                          <p className="font-[400] text-[14px] text-[#777777]">
                            Classroom
                          </p>
                        </Link>
                        <Link className="w-full p-0">
                          <img
                            className="w-[18px] h-[18px] object-contain"
                            src={history}
                            alt=""
                          />
                          <p className="font-[400] text-[14px] text-[#777777]">
                            Payment History
                          </p>
                        </Link>
                        <Link className="w-full p-0" to="/change-password">
                          <img
                            className="w-[18px] h-[18px] object-contain"
                            src={password}
                            alt=""
                          />
                          <p className="font-[400] text-[14px] text-[#777777]">
                            Change Password
                          </p>
                        </Link>
                        <Link className="w-full p-0" onClick={handleLogOut}>
                          <img
                            className="w-[18px] h-[18px] object-contain"
                            src={exit}
                            alt=""
                          />
                          <p className="font-[400] text-[14px] text-[#777777]">
                            Logout
                          </p>
                        </Link>
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
