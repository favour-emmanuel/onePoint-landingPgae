import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w[1240px] mx-auto">
      <h1 className="logo">
        One<span className="font-thin">Point</span>
      </h1>
      <ul
        className="hidden md:flex justify-center items-center gap-8 mx-auto 
        text-[15px] text-appGray bg-appfadeGray w-[420px] px-5 py-2 rounded-md "
      >
        <li className="hover:cursor-pointer">Home</li>
        <li className="hover:cursor-pointer">Service</li>
        <li className="hover:cursor-pointer">About Us</li>
        <li className="hover:cursor-pointer">Blog</li>
        <li className="hover:cursor-pointer">Contact</li>
      </ul>
      <div className="hidden md:flex">
        <button className="btnYellow">Sign Up</button>
      </div>
      {/* hamburger menue */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      {/* mobile nav */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-appBlack ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul
          className="flex flex-col justify-center items-center gap-8 mx-auto 
        text-[15px] text-appGray py-8"
        >
          <li className="mobileNavlink">Home</li>
          <li className="mobileNavlink">Service</li>
          <li className="mobileNavlink">About Us</li>
          <li className="mobileNavlink">Blog</li>
          <li className="mobileNavlink">Contact</li>
        </ul>
        <div className="mt-10 flex justify-center items-center">
          <button className="mobileButton">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
