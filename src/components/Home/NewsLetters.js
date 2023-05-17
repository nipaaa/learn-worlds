import React from "react";
import newsletter from "../../assets/home/news-letter.png";

const NewsLetters = () => {
  return (
    <div className="news_letter mb-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img className="h-full w-full" src={newsletter} alt="" />
          </div>
          <div className="bg-[#F7F7F7] px-[30px] py-[82px]">
            <h2 className="font-[Montserrat] font-[700] text-[24px] leading-[29px] text-[#FF1949] mb-[5px]">
              Newsletters
            </h2>
            <p className="font-[Poppins] font-[700] text-[25px] lg:text-[40px] leading-[40px] lg:leading-[60px] text-[#31374D] mb-[30px]">
              Get our every single notifications
            </p>
            <div className="form-control">
              <div className="flex flex-col lg:flex-row justify-between">
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="input p-3 lg:pl-[30px] lg:py-[20px] h-full border-0"
                />

                <button className="subscribe_btn ">Subscribe now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
