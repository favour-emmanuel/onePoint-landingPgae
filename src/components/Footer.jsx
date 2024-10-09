import React from "react";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navItem } from "../data/data";

const Footer = () => {
  return (
    <div
      id=""
      className="lg:px-14 px-7 lg:py-14 py-8 lg:mt-[8.5rem] mt-10 bg-appfadeGray flex flex-col justify-center"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:py-8 py-4 border-b-[1.4px] border-b-appGray/60">
        <Link
          to="home"
          smooth={true}
          duration={300}
          className="cursor-pointer text-appYellow/80"
        >
          <h1 className="logo">
            One<span className="font-thin">Point</span>
          </h1>
        </Link>

        <ul className="flex justify-between lg:my-0 my-3 items-center gap-8 text-[15px] text-white/80  w-full max-w-[40rem] py-2.5 rounded-md">
          {navItem.map((nav, index) => (
            <li
              className="cursor-pointer hover:text-appYellow/80 hover:transition-all hover:duration-300"
              key={index}
            >
              <Link to={nav.path} smooth={true} duration={500}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-10">
        <p>&copy; 2024 OnePoint. All Right Reseved</p>
        <div className="flex items-center gap-4">
          <p className="lg:my-0 my-3.5">Privacy Policy</p>
          <p className="lg:my-0 my-3.5">Terms and Conditions</p>
        </div>
        <div className="flex gap-5 lg:my-0 my-3">
          <span className="text-white cursor-pointer hover:text-appYellow/80 hover:transition-all hover:duration-300">
            <Icon icon="ri:twitter-x-fill" className="text-[1.41rem]" />
          </span>
          <span className="text-white cursor-pointer hover:text-appYellow/80 hover:transition-all hover:duration-300">
            <Icon icon="cib:instagram" className="text-[1.41rem]" />
          </span>
          <span className="text-white cursor-pointer hover:text-appYellow/80 hover:transition-all hover:duration-300">
            <Icon icon="ic:twotone-facebook" className="text-[1.41rem]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
