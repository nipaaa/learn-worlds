import React from "react";
import Title from "../../utils/Title";
import varsha from "../../assets/home/varsha.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const StudentsSay = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="students_say mb-[120px]">
      <div className="container">
        <Title>
          <span>What Our Students Say</span>
        </Title>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div className="lg:px-32 flex flex-col lg:flex-row  items-center gap-[30px]">
            <div className="">
              <img className="w-full" src={varsha} alt="" />
            </div>
            <div className="content">
              <p className="review">
                I am satisfied with the training given by XYZ Pvt. Ltd on Web
                Designing. During training, the faculty was able to clear my
                doubts regarding design process.
              </p>
              <p className="name">Varsha Adhikari</p>
            </div>
          </div>
          <div className="lg:px-32 flex flex-col lg:flex-row  items-center gap-[30px]">
            <div className="">
              <img src={varsha} alt="" />
            </div>
            <div className="content">
              <p className="review">
                I am satisfied with the training given by XYZ Pvt. Ltd on Web
                Designing. During training, the faculty was able to clear my
                doubts regarding design process.
              </p>
              <p className="name">Varsha Adhikari</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default StudentsSay;
