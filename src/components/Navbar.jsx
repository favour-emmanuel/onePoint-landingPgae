import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navItem } from "../data/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const heroHeight = document.querySelector(".heroScroll").offsetHeight;
  //     if (window.scrollY > heroHeight) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div
        className={`nav_bg relative w-full lg:px-14 px-7 ${
          sticky ? "sticky-navbar" : ""
        }`}
      >
        <div className="flex justify-between items-center py-2 h-24 max-w-[1240px] mx-auto">
          <Link
            to="home"
            smooth={true}
            duration={300}
            className="cursor-pointer"
          >
            <h1 className="logo">
              One<span className="font-thin">Point</span>
            </h1>
          </Link>
          <ul className="hidden md:flex justify-center items-center gap-8 mx-auto text-[15px] text-appGray bg-appfadeGray w-[420px] px-5 py-2.5 rounded-md">
            {navItem.map((nav, index) => (
              <li className="cursor-pointer" key={index}>
                <Link to={nav.path} smooth={true} duration={500}>
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* SIgn up Button */}
          <div className="hidden md:flex">
            <button className="btnYellow">Sign Up</button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div
              onClick={handleNav}
              className="block md:hidden cursor-pointer fixed right-5"
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>
            <div
              className={
                nav
                  ? "fixed left-0 top-0 w-[89%] z-40 h-full pl-8 border-r border-r-gray-900 bg-appBlack ease-in-out duration-500"
                  : "fixed left-[-100%]"
              }
            >
              <ul className="flex flex-col  mt-10 text-[15px] text-[#cfcfcf]">
                {navItem.map((nav, index) => (
                  <li
                    className="cursor-pointer my-5 hover:text-appYellow/60"
                    key={index}
                    onClick={handleNav}
                  >
                    <Link to={nav.path} smooth={true} duration={500}>
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex ">
                <button className="mobileButton">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
