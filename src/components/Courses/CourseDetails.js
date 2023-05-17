import React from "react";
import cart from "../../assets/course/cart.png";
import arrow from "../../assets/course/arrow.png";
import instructor from "../../assets/course/instructor.png";
import Reviews from "./Reviews";
import facebook from "../../assets/contact/facebook.png";
import twitter from "../../assets/contact/twitter.png";
import medium from "../../assets/contact/medium.png";
import telegram from "../../assets/contact/telegram.png";
import Rating from "./Rating";
import Curriculum from "./Curriculum";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <div className="course_details mb-[57px]">
      <div className="container">
        <h3 className="mb-[70px] text-[#31374D] text-[34px] font-[600] ">
          Web Development
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[61px]">
          <div className="col-span-3">
            <div className="mb-[50px]">
              <iframe
                width="100%"
                height="507px"
                src="https://www.youtube.com/embed/phWxA89Dy94"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="mb-[25px] text-[#31374D] text-[28px] font-[700] leading-[34px]">
              Description
            </h4>

            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>hello</p>
              </div>
            </div>

            <p className="mb-[50px] text-[#5F6765] text-justify text-[16px] font-[400] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra Lorem ipsum dolor sit amet,
              consectetur adipiscing elit ut aliquam, purus sit ametluctus
              venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
              purus nonenim praesent elementum facilisis leo, vel fringilla est
              ullamcorper eget nulla facilisietiam dignissim diam quis enim
              lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra.
            </p>
            <h4 className="mb-[25px] text-[#31374D]  text-[28px] font-[700] leading-[34px]">
              What does this course include?
            </h4>
            <p className="mb-[50px] text-[#5F6765] text-justify text-[16px] font-[400] leading-[24px]">
              Consectetur adipiscing elit ut aliquam, purus sit ametluctus
              venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
              purus nonenim praesent elementum facilisis leo, vel fringilla est
              ullamcorper eget nulla facilisietiam dignissim diam quis enim
              lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra.
            </p>

            <div className="grid gap-[25px] grid-cols-1 lg:grid-cols-2 mb-[55px]">
              <div className="flex gap-[26px] items-center">
                <img src={arrow} alt="" />
                <p className=" text-[#5F6765]  text-[16px] font-[500] ">
                  Web Application Development
                </p>
              </div>
              <div className="flex gap-[26px] items-center">
                <img src={arrow} alt="" />
                <p className=" text-[#5F6765]  text-[16px] font-[500] ">
                  Software Engineering
                </p>
              </div>
              <div className="flex gap-[26px] items-center">
                <img src={arrow} alt="" />
                <p className=" text-[#5F6765]  text-[16px] font-[500] ">
                  Web Development
                </p>
              </div>
              <div className="flex gap-[26px] items-center">
                <img src={arrow} alt="" />
                <p className=" text-[#5F6765]  text-[16px] font-[500] ">
                  Backend Development
                </p>
              </div>
            </div>

            <div className="instructor">
              <h3 className="text-[#31374D] text-[28px] font-[700] leading-[34px] mb-[60px]">
                About the instructors
              </h3>

              <div className="text-center">
                <img className="mx-auto mb-[40px]" src={instructor} alt="" />
                <h3 className="text-[#31374D] text-[28px] font-[700] leading-[34px] mb-[15px]">
                  Angelou Canales{" "}
                </h3>
                <p className="text-[#5F6765] text-[20px] font-[500] leading-[24px] mb-[16px]">
                  Web Developer
                </p>
              </div>
              <Curriculum />

              <p>
                Consectetur adipiscing elit ut aliquam, purus sit ametluctus
                venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                purus nonenim praesent elementum facilisis leo, vel fringilla
                est ullamcorper eget nulla facilisietiam dignissim diam quis
                enim lobortis scelerisque fermentum dui faucibus in ornare quam
                viverra.
              </p>
              <p className="mb-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui faucibus in ornare quam viverra Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut aliquam, purus sit ametluctus
                venenatis.
              </p>
              <Rating />
              <Reviews />
              <div>
                <h2 className="text-[28px] font-[700] text-[#31374D] leading-[34px] mb-[30px]">
                  Share this course
                </h2>
                <div className="flex gap-[22px]">
                  <Link to="!#">
                    <img src={facebook} alt="" />
                  </Link>
                  <Link to="!#">
                    <img src={twitter} alt="" />
                  </Link>
                  <Link to="!#">
                    <img src={telegram} alt="" />
                  </Link>
                  <Link to="!#">
                    <img src={medium} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="price_box text-center">
              <h2>Price</h2>
              <div className="flex justify-center">
                <p>$</p>
                <h1>29</h1>
              </div>
              <button className="buy_btn">Buy This Course</button>
              <button className="cart_btn" type="">
                <img src={cart} alt="" />
                add to cart
              </button>
            </div>
            <div className="course_details_box">
              <h4>Course Details</h4>
              <ul>
                <li>40 Classes</li>
                <li>Project basis tuitorial</li>
                <li>Freelencing guideline</li>
                <li>Knowledge about marketplace</li>
                <li>Lifetime support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
