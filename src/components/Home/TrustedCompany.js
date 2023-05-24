import React from "react";
import amazon from "../../assets/logo/amazon.png";
import cisco from "../../assets/logo/cisco.png";
import google from "../../assets/logo/google.png";
import amd from "../../assets/logo/amd.png";
import design from "../../assets/logo/99design.png";
import chaseo from "../../assets/logo/amazon.png";
import circleBg from "../../assets/bg/circel-bg1.png";
import { motion } from "framer-motion";

const TrustedCompany = () => {
  const trustedCompany = [
    {
      picture: amazon,
    },
    {
      picture: cisco,
    },
    {
      picture: amd,
    },
    {
      picture: google,
    },
    {
      picture: design,
    },
    {
      picture: chaseo,
    },
  ];
  return (
    <motion.div  initial={{ x: -300 }}
    animate={{ x: 0 }}
    transition={{
      delay: 0.2,
      duration: 2,
      type: "spring",
      stiffness: 20,
    }} className="trusted_company">
      <img className="hidden lg:block circle_bg" src={circleBg} alt="" />
      <div className="container ">
        <h2>Trusted by 5000+ companies worldwide</h2>
        <div className="flex flex-wrap   justify-center lg:justify-between ">
          {trustedCompany.map((company, index) => (
            <div key={index}>
              <img src={company.picture} alt="" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedCompany;
