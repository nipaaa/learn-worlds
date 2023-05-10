import React from "react";
import cart from "../../assets/course/cart.png";

const CourseDetails = () => {
  return (
    <div className="course_details">
      <div className="container">
        <h3 className="mb-[70px] text-[#31374D] text-[34px] font-[600] ">
          Web Development
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[61px]">
          <div className="col-span-2">
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
          </div>
          <div>
            <div className="price_box text-center">
              <h2>Price</h2>
              <div className="flex justify-center">
                <p>$</p>
                <h1>29</h1>
              </div>
              <button className="gradient_btn mb-[17px]" type="">
                Buy This Course
              </button>
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
