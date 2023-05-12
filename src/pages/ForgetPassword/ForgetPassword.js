import React, { useState } from "react";
import AuthHeader from "../../shared/AuthHeader";
import ForgetPic from "../../assets/illustration/forger.png";
import Square from "../../assets/illustration/square.png";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [verifiedCode, setVerifiedCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handleGetVerification = (event) => {
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
      />
      <div className="flex  absolute top-0 left-0 w-full">
        <div className="w-1/2 h-screen bg-[#fee0e4]  hidden lg:block">
          <div className="flex flex-col items-center pt-[147px] pl-[289px]] ">
            <img src={ForgetPic} />
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
              m
              className="absolute top-[130px] md:top-[150px] md:left-[150px]  lg:top-[260px] lg:left-[140px]"
              onSubmit={handleSubmit}
            >
              <div className="mx-10  md:mx-0 lg:mx-0">
                <h4 className="font-[700] text-[26px] md:text-[34px] lg:text-[44px] text-[#31374D]">
                  Forget password
                </h4>
                <div>
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    className="input input-bordered w-full h-[65px] border-[#cecece] mt-[50px] mb-[30px] py-[19px] rounded-[3px] pl-[35px]"
                    required
                  />

                  <label className="flex justify-end">
                    <span className="font-[400] text-[14px] text-[#FF1949]">
                      {/* <Link to="/forget-password">Forgot password?</Link> */}
                    </span>
                  </label>
                  <div className="startNow_gradient_btn cursor-pointer">
                    <button className="w-full" type="submit">
                      Get OTP
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
          {step === 1 && (
            <form
              m
              className="absolute top-[130px] md:top-[150px] md:left-[150px]  lg:top-[260px] lg:left-[140px]"
              onSubmit={handleGetVerification}
            >
              <div className="mx-10  md:mx-0 lg:mx-0">
                <h4 className="font-[700] text-[26px] md:text-[34px] lg:text-[44px] text-[#31374D]">
                  Verify phone number
                </h4>
                <div>
                  <input
                    type="number"
                    placeholder="Enter code"
                    className="input input-bordered w-full h-[65px] border-[#cecece] mt-[50px] mb-[30px] py-[19px] rounded-[3px] pl-[35px]"
                    required
                    onChange={(e) => setVerifiedCode(e.target.value)}
                  />

                  <label className="flex justify-end">
                    <span className="font-[400] text-[14px] text-[#FF1949]">
                      {/* <Link to="/forget-password">Forgot password?</Link> */}
                    </span>
                  </label>
                  <div
                    className={`${
                      verifiedCode ? "startNow_gradient_btn" : "notVerified_btn"
                    }  cursor-pointer`}
                  >
                    <button className="w-full" type="submit">
                      Get OTP
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
