import React from "react";
import inovation from "../../assets/about/inovation.png";
import qualified from "../../assets/about/qualified.png";
import trusted from "../../assets/about/trusted.png";

const GlobalOnline = () => {
  const marketplaces = [
    {
      pic: inovation,
      title: "Inovative course",
      description:
        "Sit diam etiam diam tincidunt pellentesque nunc mattis at congue quis scelerisque lobortis blandit sit congue quis scelerisquecongue quis ",
    },
    {
      pic: qualified,
      title: "Qualified Teachers",
      description:
        "Sit diam etiam diam tincidunt pellentesque nunc mattis at congue quis scelerisque lobortis blandit sit congue quis scelerisquecongue quis ",
    },
    {
      pic: trusted,
      title: "Trusted by Millions",
      description:
        "Sit diam etiam diam tincidunt pellentesque nunc mattis at congue quis scelerisque lobortis blandit sit congue quis scelerisquecongue quis ",
    },
  ];
  return (
    <div className="global_online mb-[120px]">
      <div className="container">
        <h2>
          Global Online <br /> Education Marketplace
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {marketplaces.map((market, index) => (
            <div className="mb-[30px]" key={index}>
              <img className="mx-auto mb-[15px]" src={market.pic} alt="" />
              <h3 className="text-center">{market.title}</h3>
              <p>{market.description}</p>
            </div>
          ))}
        </div>
        <div className="lg:px-[90px] px-0">
          <iframe
            width="100%"
            height="444"
            src="https://www.youtube.com/embed/ehPs8qDs1V0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GlobalOnline;
