import React from "react";
import logo from "../assets/logo/footer-logo.png";
import fb from "../assets/logo/Facebook.png";
import tw from "../assets/logo/Twitter.png";
import tl from "../assets/logo/Telegram.png";
import md from "../assets/logo/Medium.png";
import Content from "../utils/Content";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      pic: fb,
    },
    {
      pic: tw,
    },
    {
      pic: tl,
    },
    {
      pic: md,
    },
  ];
  const links = [
    {
      title: "Useful Links",
      menu: {
        link1: "Home",
        link1: "Course",
        link1: "About Us",
        link1: "Events",
        link1: "Page",
      },
    },
    {
      title: "Helps",
      menu: {
        link1: "Contact Us",
        link1: "Privacy Policy",
        link1: "Use of Terms",
        link1: "Support",
      },
    },
    {
      title: "Contact",
      menu: {
        link1: "Shaymoli, Dhaka",
        link1: "+0123456789",
        link1: "elearning@gmail.com",
      },
    },
  ];
  return (
    <div className="bg-[#272727] text-white text-[16px]  pt-12">
      <div className="container ">
        <div className="flex justify-between flex-wrap gap-5 mb-5">
          <div>
            <img src={logo} alt="" />
            <p className="my-4 opacity-50 ">
              Eros fermentum lacus, scelerisque vivamus pellentesque <br /> urna
              vitae fringilla interdum eget fermentum, integer <br />{" "}
              scelerisque nunc
            </p>
            <div className="flex gap-6">
              {socialMedia.map((icon, index) => (
                <div key={index}>
                  <img src={icon.pic} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xl font-bold mb-4">Useful Links</h5>
            <div className="flex flex-col gap-y-3 opacity-50 ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Course</NavLink>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/">Events</NavLink>
              <NavLink to="/">Page</NavLink>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Helps</h5>
            <div className="flex flex-col gap-y-3 opacity-50">
              <NavLink to="/">Contact Us</NavLink>
              <NavLink to="/">Privacy Policy</NavLink>
              <NavLink to="/">Use of Terms</NavLink>
              <NavLink to="/">Support</NavLink>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Contact</h5>
            <div className="flex flex-col gap-y-3">
              <p>
                <span className="font-bold">Address :</span>{" "}
                <span className="opacity-50">Shaymoli, Dhaka</span>
              </p>
              <p>
                <span className="font-bold">Phone :</span>{" "}
                <span className="opacity-50"> +0123456789</span>
              </p>
              <p>
                <span className="font-bold">Email :</span>{" "}
                <span className="opacity-50">elearning@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-row justify-between py-3 opacity-50">
          <div>
            <p>© Copyright 2022 NFT ALL RIGHT RESERVED</p>
          </div>
          <div className="flex gap-4">
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
