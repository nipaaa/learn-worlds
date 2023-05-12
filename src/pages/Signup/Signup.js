import React, { useState } from "react";
import Illustration from "./../../assets/illustration/loginPic.png";
import Square from "./../../assets/illustration/square.png";
import GoogleLogo from "./../../assets/illustration/Google.png";
import AuthHeader from "../../shared/AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import mailbox from "../../assets/illustration/mailbox.png";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handleSendVerification = (event) => {
    event.preventDefault();
    setStep((prev) => prev + 1);
  };
  return (
    <div className="relative">
      <AuthHeader
        page={{
          name: "Login",
          link: "/login",
          description: "Already have any account?",
        }}
      ></AuthHeader>
      {step === 2 ? (
        <div className="h-[80vh] flex justify-center items-center p-10 m-20">
          <div className="text-center">
            <img className="mx-auto" src={mailbox} alt="" />
            <p className="font-[600] my-[50px] text-[22px] text-[#31374C]">
              Verification Successful
            </p>
            <button className="done-botton">
              <Link to="/">Done</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex  absolute top-0 left-0 w-full ">
          <div className="w-1/2 h-screen bg-[#fee0e4] relative hidden lg:block">
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
          <div className="w-full lg:w-1/2 relative">
            {step === 0 && (
              <form
                className="absolute top-[130px] md:top-[150px] md:left-[150px]  lg:top-[150px] lg:left-[140px] signupTablet"
                onSubmit={handleSubmit}
              >
                <div className="mx-10  md:mx-0 lg:mx-0">
                  <h4 className="font-[700] text-[44px] text-[#31374D]">
                    Hello!
                  </h4>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="input input-bordered w-full h-[65px] border-[#cecece]  mt-[40px] py-[19px] rounded-[3px] pl-[35px]"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="input input-bordered w-full h-[65px] border-[#cecece] my-[25px]  py-[19px] rounded-[3px] pl-[35px]"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="input input-bordered w-full h-[65px] border-[#cecece] py-[19px] rounded-[3px] pl-[35px]"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="input input-bordered w-full h-[65px] border-[#cecece] my-[25px] py-[19px] rounded-[3px] pl-[35px]"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="input input-bordered w-full h-[65px] border-[#cecece] mb-[40px] py-[19px] rounded-[3px] pl-[35px]"
                      required
                    />

                    <div className="startNow_gradient_btn cursor-pointer">
                      <button className="w-full" type="submit">
                        Continue
                      </button>
                    </div>

                    <div className="divider font-[600] text-[20px] my-[35px]">
                      OR
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-[15px]  border-[1px] border-[#cecece] rounded-[3px] py-[14px]">
                    <div>
                      <img src={GoogleLogo} alt="" />
                    </div>
                    <div className="font-[500] text-[18px] ">
                      LogIn with Google
                    </div>
                  </div>
                </div>
              </form>
            )}
            {step === 1 && (
              <form
                className="absolute top-[354px] mx-10 md:mx-0  md:left-[140px]  md:w-[460px]"
                onSubmit={handleSendVerification}
              >
                <h4 className="font-[700] text-[36px] text-[#31374D]">
                  OTP Verification
                </h4>
                <label className="mt-[19px] mb-[10px] font-[400] text-[14px]">
                  Enter the 4 digit code sent to your phone
                </label>
                <div>
                  <input
                    type="number"
                    placeholder="Enter code here"
                    className="input input-bordered w-full h-[65px] border-[#cecece] mb-[40px]  py-[19px] rounded-[3px] pl-[35px]"
                    required
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />

                  <button
                    disabled={!verificationCode && true}
                    className={`${
                      verificationCode
                        ? "startNow_gradient_btn"
                        : "notVerified_btn"
                    }  w-full`}
                    type="submit"
                  >
                    Next
                  </button>
                </div>
                <div>
                  <p className="mt-[40px] mb-[15px] font-[400] text-[18px]">
                    Didn’t get any code?
                  </p>
                  <p className="font-[400] text-[18px] text-[#F94C66]">
                    wait 60 second to get the code again
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
