import React from "react";
import AuthHeader from "../../shared/AuthHeader";
import Illustration from "./../../assets/illustration/loginPic.png";
import Square from "./../../assets/illustration/square.png";

const Login = () => {
  return (
    <div className="relative">
      <AuthHeader></AuthHeader>
      <div className="flex  absolute top-0 left-0 w-full ">
        <div className="w-1/2 h-screen bg-[#fee0e4] relative">
          <div className="absolute top-[226px] right-[120px]">
            <img src={Illustration} />
            <h3
              style={{ maxWidth: "18ch" }}
              className="font-[700] text-[44px] text-[#5a596b]"
            >
              Turn your ambition into a success story
            </h3>
          </div>
          <img className="absolute bottom-0 left-0" src={Square} />
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-[260px] left-[140px]">
            <h4 className="font-[700] text-[44px] text-[#31374D]">
              Hello! Welcome back.
            </h4>
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full border-[#cecece] mt-[50px] mb-[30px] py-[19px] rounded-[3px] pl-[35px]"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full border-[#cecece]  py-[19px] rounded-[3px] pl-[35px]"
              />
              <label className="flex justify-end">
                <span className="font-[400] text-[14px] text-[#FF1949]">
                  Forgot password?
                </span>
              </label>
              <div>
                <button>Start Now</button>
              </div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                  content
                </div>
                <div className="divider">OR</div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                  content
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
