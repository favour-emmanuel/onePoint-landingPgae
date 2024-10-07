import React from "react";
import atmImage from "../assets/Group11.png";

const Hero = () => {
  return (
    <>
      <div className="px-7 lg:px-14 lg:py-14 w-full absolute lg:bottom-[-2.5rem] top-[9rem]">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-x-16">
          <div className="w-full max-w-[40rem]">
            <p className="text-appYellow text-sm italic my-1">
              Let's Deal with <span>_____ </span>
            </p>
            <h1 className="lg:text-6xl font-semibold text-4xl mb-7">
              Your Gateway
            </h1>
            <h1 className="lg:text-6xl text-5xl">
              To
              <span className="w-full bg-appYellow font-semibold py-1 text-appBlack px-2 ml-2 rounded-md">
                Modern Finance
              </span>
            </h1>
            <p className="text-[18px] my-6 w-full max-w-[36rem] font-normal text-appGray">
              Empower your financial journey with cutting-edge technology and
              personalized solutions.
            </p>
            <div className="my-10 flex gap-6">
              <button className="bigBtnYellow">Sign In</button>
              <button className="bigBtnBlack ml-3">Learn More</button>
            </div>
          </div>
          <div className="">
            <img src={atmImage} alt="/" className="w-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
