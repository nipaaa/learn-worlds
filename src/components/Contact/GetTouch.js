import React from "react";
import location from "../../assets/contact/location.png";
import call from "../../assets/contact/call.png";
import email from "../../assets/contact/email.png";
import facebook from "../../assets/contact/facebook.png";
import twitter from "../../assets/contact/twitter.png";
import medium from "../../assets/contact/medium.png";
import telegram from "../../assets/contact/telegram.png";

const GetTouch = () => {
  return (
    <div className="get_touch mb-[120px]">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <div>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
            </p>
            <div>
              <div className="flex items-center gap-[30px] mb-[30px]">
                <img src={location} alt="" />
                <div>
                  <h4>Location</h4>
                  <p className="sub_content">Shamoly, Dhaka, Bangladesh </p>
                </div>
              </div>
              <div className="flex items-center gap-[30px] mb-[30px]">
                <img src={call} alt="" />
                <div>
                  <h4>Call Us</h4>
                  <p className="sub_content">+8801723645789 </p>
                </div>
              </div>
              <div className="flex items-center gap-[30px] mb-[30px]">
                <img src={email} alt="" />
                <div>
                  <h4>Email Us</h4>
                  <p className="sub_content">HRmanagement@gmail.com </p>
                </div>
              </div>
            </div>
            <hr className="mb-[30px]" />

            <div className="flex gap-[22px]">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={medium} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2346480476767!2d90.3628284759947!3d23.774657187843395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b00362c719%3A0x98ffa85ad21b509e!2sShyamoli%20Square%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1681619441895!5m2!1sen!2sbd"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
