import React from "react";
import course from "../../assets/home/online-course.png";
import trainer from "../../assets/home/expart.png";
import certificate from "../../assets/home/certificate.png";
import lifeTime from "../../assets/home/life-time.png";
import Title from "../../utils/Title";

const Offer = () => {
  const offers = [
    {
      pic: course,
      title: "Online Courses",
      className: "bg-[#26B6F4] p-[30px] rounded-[15px]",
    },
    {
      pic: trainer,
      title: "Expert Trainer",
      className:
        "bg-gradient-to-r from-[#FF976A] to-[#FD743A] p-[30px] rounded-[15px]",
    },
    {
      pic: certificate,
      title: "Get Certificate",
      className:
        "bg-gradient-to-r from-[#FFC670] to-[#EBB019] p-[30px] rounded-[15px]",
    },
    {
      pic: lifeTime,
      title: "Life Time Support",
      className:
        "bg-gradient-to-r from-[#50D284] to-[#2BD89A] p-[30px] rounded-[15px]",
    },
  ];
  return (
    <div className="bg-[#EBF3FF] py-[60px] mb-[120px]">
      <div className="container">
        <Title>
          <span>What We Offer</span>{" "}
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] justify-center">
          {offers.map((offer, index) => (
            <div key={index} className={offer.className}>
              <img className="mx-auto mb-[30px]" src={offer.pic} alt="" />
              <p className="text-white text-[24px] font-[600] text-center">
                {offer.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
