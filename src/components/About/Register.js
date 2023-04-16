import React from "react";
import BlueBtn from "../../utils/BlueBtn";

const Register = () => {
  return (
    <div className="register mb-[200px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px]">
          <div>
            <h2>Register Now</h2>
            <p className="mb-[30px]">
              Amet euismod vel suspendisse nunc, ut rutrum arcu eget utrum arcu
              eget pretium morbi integer quisque .
            </p>
            <div className="flex flex-wrap gap-[30px]">
              <div className="round_card first">
                <h4>21</h4>
                <p>Days</p>
              </div>
              <div className="round_card second">
                <h4>12</h4>
                <p>Hours</p>
              </div>
              <div className="round_card third">
                <h4>15</h4>
                <p>Minutes</p>
              </div>
              <div className="round_card forth">
                <h4>10</h4>
                <p>Seconds</p>
              </div>
            </div>
          </div>

          <div className="register_form -mb-[81px]">
            <h2 className="flex justify-center">Book a Free Class</h2>
            <form>
              <input className="w-full" type="text" placeholder="Full name" />
              <input className="w-full" type="tel" placeholder="Phone number" />
              <input
                className="w-full"
                type="email"
                placeholder="Email address"
              />
              <select className="w-full mb-[60px]">
                <option>Select Courses</option>
                <option value="web">Web Design</option>
                <option value="ui-ux">UI/UX</option>
                <option value="graphics">Graphics</option>
              </select>
              <div className="text-center">
                <BlueBtn>Book Now</BlueBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
