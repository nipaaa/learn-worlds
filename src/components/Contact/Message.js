import React from "react";

const Message = () => {
  return (
    <div className="message mb-[120px]">
      <div className="container">
        <h2>Leave Us Message</h2>

        <form>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mb-[30px]">
            <input type="" className="w-full" placeholder="Full Name" />
            <input type="" className="w-full" placeholder="Email Address" />
            <input type="" className="w-full" placeholder="Phone Number" />
          </div>
          <textarea
            className="w-full mb-[60px]"
            placeholder="Write Message"
          ></textarea>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
