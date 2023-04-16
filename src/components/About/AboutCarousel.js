import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import man3 from "../../assets/about/man3.png";

const AboutCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQgXqxC-qkVqoutsZxNxfVKvrtHgE5857zQ&usqp=CAU",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVyzumcG23SKpRdSSjLnWqdm_vR75qX-xHw&usqp=CAU",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCf6dM6WtzMY-n_kUyt_CVG7rvBMNkit-Ng&usqp=CAU",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQgXqxC-qkVqoutsZxNxfVKvrtHgE5857zQ&usqp=CAU",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVyzumcG23SKpRdSSjLnWqdm_vR75qX-xHw&usqp=CAU",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCf6dM6WtzMY-n_kUyt_CVG7rvBMNkit-Ng&usqp=CAU",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
  };
  return (
    <div className="student_say_slider">
      <div className="container my-24">
        <div className="slider"></div>
        <Slider {...settings}>
          {images.map((imgg, index) => (
            <div
              key={index}
              className={index === slideIndex ? "slide slide-active" : "slide"}
            >
              <div className="slider_card shadow m-3 p-[30px]">
                <div className="flex items-center gap-[15px] mb-[15px]">
                  <img src={man3} alt="" />
                  <div>
                    <h5>Sofia</h5>
                    <div className="flex gap-[6px] text-[#FFA033]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                  </div>
                </div>
                <h6>It was a very good experience</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis.{" "}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutCarousel;
