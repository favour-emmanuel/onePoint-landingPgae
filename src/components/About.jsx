import React from "react";
import aboutImg from "../assets/about-img.png";

const About = () => {
  const tabs = [
    { label: "Banking" },
    { label: "Investment" },
    { label: "Insurance" },
    { label: "Loans" },
    { label: "Financial Tools" },
  ];
  return (
    <div id="about" className="lg:px-14 px-7 lg:py-20 py-10 lg:mt-0 mt-[25rem]">
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="lg:text-5xl text-3xl font-semibold w-full max-w-[26rem]">
          Discover the <span className="text-appYellow">Future</span> of Finance
        </h1>
        <p className="text-appGray lg:text-lg text-base w-full max-w-[31rem] lg:my-0 my-6">
          At On Point, we're redefining the way you manage, grow, and protect
          your money. Whether you're looking for seamless banking, investment
          opportunities, or insurance solutions,our platform is designed with
          you in mind.{" "}
        </p>
      </div>

      {/* tabs */}
      <div className="py-4 lg:px-0 px-5 my-10 rounded-lg bg-[#191919] flex flex-wrap lg:justify-around items-center">
        {tabs.map((tab, index) => (
          <h1
            className={`${
              index === 0
                ? "bg-appYellow text-black w-full max-w-[9rem] flex justify-center lg:py-3 px-2.5 rounded-md"
                : ""
            } text-appGray lg:text-lg text-base font-semibold px-4 py-2.5 lg:my-0 my-1
             rounded`}
            key={index}
          >
            {tab.label}
          </h1>
        ))}
      </div>
      {/* empower your financial experience */}
      <div className="my-3 px-12 py-9 bg-white text-black rounded-3xl flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-appBlack font-semibold w-full max-w-[30rem] text-3xl">
            Empower Your Financial Experience with On Point Banking
          </h1>
          <p className="text-appGray w-full max-w-[31rem] my-5 lg:text-lg text-base font-normal">
            In the realm of fintech banking, we provide a comprehensive suite of
            services designed to revolutionize the way you manage your finances.
          </p>
          <button className="bg-appYellow text-base font-semibold text-black p-3 rounded-md w-full max-w-[8rem]">
            Learn More
          </button>
        </div>
        <div className="max-w-[27rem]">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
