import React from "react";
import amazon from "../../assets/logo/amazon.png";
import cisco from "../../assets/logo/cisco.png";
import google from "../../assets/logo/google.png";
import amd from "../../assets/logo/amd.png";
import design from "../../assets/logo/99design.png";
import chaseo from "../../assets/logo/amazon.png";

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
    <div className="trusted_company_bg">
      <div className="container py-[120px]">
        <p className="text-center text-[#31374D] font-[600] mb-[60px]">
          Trusted by 5000+ companies worldwide
        </p>
        <div className="flex flex-wrap gap-8 justify-center lg:justify-between ">
          {trustedCompany.map((company, index) => (
            <div key={index}>
              <img src={company.picture} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
