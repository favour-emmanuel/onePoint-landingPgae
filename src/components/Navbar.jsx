import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItem = [
    { label: "Home", path: "/" },
    { label: "Service", path: "service" },
    { label: "About Us", path: "about" },
    { label: "Blog", path: "blog" },
    { label: "Contact", path: "contact" },
  ];

  return (
    <>
      <div className="nav_bg relative  w-full lg:px-14 px-7 ">
        <div className="flex justify-between items-center py-1.5 h-24 max-w-[1240px] mx-auto">
          <h1 className="logo">
            One<span className="font-thin">Point</span>
          </h1>
          <ul className="hidden md:flex justify-center items-center gap-8 mx-auto text-[15px] text-appGray bg-appfadeGray w-[420px] px-5 py-2 rounded-md">
            {navItem.map((nav, index) => (
              <li className="cursor-pointer" key={index}>
                <Link to={nav.path} smooth={true} duration={500}>
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex">
            <button className="btnYellow">Sign Up</button>
          </div>
          <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[80%] z-40 h-full border-r border-r-gray-900 bg-appBlack ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <ul className="flex flex-col items-center mt-20 text-[15px] text-[#cfcfcf]">
              {navItem.map((nav, index) => (
                <li className="cursor-pointer" key={index} onClick={() => {}}>
                  <Link to={nav.path} smooth={true} duration={500}>
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex justify-center items-center">
              <button className="mobileButton">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
