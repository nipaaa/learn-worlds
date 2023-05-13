import React from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <section className="container mt-[121px] mb-[130px]">
      <div className="max-w-[460px] mx-auto">
        <h3 className="font-[500] text-[34px] md:text-[45px] text-[#31374C] text-center mb-[60px]">
          Change password
        </h3>

        <div className="flex flex-col gap-[20px]">
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">
              Previous Password
            </label>
            <input
              type="number"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="Enter Previous Password"
            />
          </div>
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">
              New Password
            </label>
            <input
              type="number"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="Enter New Password"
            />
          </div>
          <div className="w-full ">
            <label className="font-[400] text-[14x] mb-[10px]">
              Confirm Password
            </label>
            <input
              type="number"
              required
              className="block border w-full h-[60px] input-border"
              placeholder="Enter Confirm Password"
            />
          </div>
          <button className="submit_gradiant_button">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
