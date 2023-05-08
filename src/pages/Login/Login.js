import React from "react";
import AuthHeader from "../../shared/AuthHeader";
import Illustration from "./../../assets/illustration/loginPic.png";
import Square from "./../../assets/illustration/square.png";
import GoogleLogo from "./../../assets/illustration/Google.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="relative">
      <AuthHeader
        page={{
          name: "Register",
          link: "/signup",
          description: "Don’t have any account?",
        }}
      ></AuthHeader>
      <div className="flex  absolute top-0 left-0 w-full ">
        <div className="w-1/2 h-screen bg-[#fee0e4] relative">
          <div className="absolute top-[226px] right-[120px]">
            <img src={Illustration} />
            <h3
              style={{ maxWidth: "18ch" }}
              className="font-[700] text-[44px] text-[#5a596b] mt-[70px]"
            >
              Turn your ambition into a success story
            </h3>
          </div>
          <img className="absolute bottom-0 left-0" src={Square} />
        </div>
        <div className="w-1/2 relative">
          <form
            className="absolute top-[260px] left-[140px]"
            onSubmit={handleSubmit}
          >
            <h4 className="font-[700] text-[44px] text-[#31374D]">
              Hello! Welcome back.
            </h4>
            <div>
              <input
                type="email"
                placeholder="Enter phone number"
                className="input input-bordered w-full h-[65px] border-[#cecece] mt-[50px] mb-[30px] py-[19px] rounded-[3px] pl-[35px]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full h-[65px] border-[#cecece]  py-[19px] rounded-[3px] pl-[35px]"
                required
              />
              <label className="flex justify-end">
                <span className="font-[400] text-[14px] text-[#FF1949]">
                  Forgot password?
                </span>
              </label>
              <div className="startNow_gradient_btn cursor-pointer">
                <button className="w-full" type="submit">
                  Start Now
                </button>
              </div>

              <div className="divider font-[600] text-[20px] my-[35px]">OR</div>
            </div>
            <div className="flex items-center justify-center gap-[15px]  border-[1px] border-[#cecece] rounded-[3px] py-[14px]">
              <div>
                <img src={GoogleLogo} alt="" />
              </div>
              <div className="font-[500] text-[18px] ">LogIn with Google</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
