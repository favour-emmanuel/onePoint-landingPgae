import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import img1 from "../assets/s1.png";
import img2 from "../assets/s2.png";
import img3 from "../assets/s3.png";
import img4 from "../assets/s4.png";
import sp1 from "../assets/sp-1.png";
import sp2 from "../assets/sp-2.png";
import sp3 from "../assets/sp-3.png";
import sp4 from "../assets/sp-4.png";
import sp5 from "../assets/sp-5.png";

// Array for services
const services = [
  {
    title: "Innovative Tecnology",
    text: "Our advance tecnology ensures you have acces to the latest financila tools and services, all from the comfort of your device.",
    img: img1,
  },
  {
    title: "Personalized Solutions",
    text: "We understand that your financial needs are unique. Our tailored solutions cater to your specific goals and aspiration",
    img: img2,
  },
  {
    title: "Security You Can Trust",
    text: "Your financial security is our top priority. We employ state-of-the-art security measures to protech your information and transactions.",
    img: img3,
  },
  {
    title: "Expert Guidance",
    text: "Our team of financial experts ia here to assist you every step of the way. Make informed decisions with the help of our experienced professionals.",
    img: img4,
  },
];

// Array for serives provided
const servProvided = [
  {
    img: sp1,
    title: "Banking",
    text: "Access your funds, make payments, and manage your accounts with ease. Access your account 24/7, check balance, transfer funds, and pay bills from your computer or mobile device",
  },
  {
    img: sp2,
    title: "Investment",
    text: "Explore a world of investment opportunities, from stocks to cryptocurrencines. Utilize automated investment platforms powered by AI to create a diversified portflio tailored to your goals.",
  },
  {
    img: sp3,
    title: "Insurance",
    text: "Protect what matters most with comprehensive insurance coverage. Explore a range of insurance options, from life and health to property and auto, to safeguard your financial well-being with our comprehensive insurance services.",
  },
  {
    img: sp4,
    title: "Loans",
    text: "Get the funds you need, whether it's for personal or business purposes. Get the funds you need, whether it's for personal or business purposes, with our flexible and accessible loan options.",
  },
  {
    img: sp5,
    title: "Financial Tools",
    text: "Access a suit of financial calculators, budgeting tools, and educational resources to enhance your financial knowledge and make informed decisions.",
  },
];

const Service = () => {
  return (
    <div id="service" className="lg:py-16 py-10 lg:px-14 px-7">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="lg:text-5xl text-3xl  max-w-[31rem]">
          <h1 className="w-full block">Why Choose </h1>
          <h1>
            The
            <span className="text-appYellow font-semibold"> OnePoint</span>{" "}
            Fintech
          </h1>
        </div>
        <p className="lg:text-lg text-base my-3 w-full font-normal text-appGray max-w-[42rem]">
          OnePoint offers innovative technology , personalized solutions, robust
          security, and expert guidance to empower your unique financial
          journey, all in one place.
        </p>
      </div>
      <div className="my-3  place-items-center grid lg:gap-x-4 gap-y-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? "bg-appYellow text-appBlack"
                : "bg-appfadeGray text-appGray"
            } h-[18rem] py-3 px-4 rounded-lg `}
          >
            <div className="flex justify-between items-center">
              <h1
                className={`${
                  index === 1 ? "text-appBlack" : "text-white"
                } font-semibold text-xl`}
              >
                {service.title}
              </h1>
              <img src={service.img} alt="" className="w-[5.6rem]" />
            </div>
            <p className="text-base my-5 ">{service.text}</p>
            <a
              href="#"
              className={`flex items-center gap-2 text-[15.8px] ${
                index === 1
                  ? "text-[#35332b] hover:text-black hover:duration-300"
                  : "text-appYellow/70 hover:text-appYellow hover:duration-300"
              } `}
            >
              Learn More{" "}
              <span className={`${index === 1 ? "text-appBlack" : ""} text-lg`}>
                <Icon icon="proicons:open" className="text-lg" />
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* service provided */}
      <div className="py-16">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <p className="text-base lg:text-lg text-appGray max-w-[32rem]">
            On Point provides a comprehensive suite of financial services,
            including banking, investments, insurance, loans, and financial
            tools to meet your diverse financial needs.
          </p>
          <h1 className="w-full lg:max-w-[15.8rem] max-w-[2rem]: leading-[3rem] lg:mt-0 mt-3 text-3xl lg:text-[2.68rem] font-semibold">
            The <span className="text-appYellow">Services</span> We Provide
          </h1>
        </div>
        <div className="my-4 border-t-[1.4px] border-appGray">
          {servProvided.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-3 grid-cols-1 border-b-[1.4px] border-appGray py-4"
            >
              <img src={item.img} alt="" className="lg:w-[4.7rem] w-16" />
              <h1 className="text-appYellow text-xl font-semibold my-2">
                {item.title}
              </h1>
              <p className="text-appGray text-base my-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
