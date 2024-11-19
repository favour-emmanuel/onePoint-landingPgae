import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import atmImage from "../assets/Group11.png";

const SignUp = () => {
  return (
    <div className="py-10 w-full text-white">
      <div className="my-5 w-full flex justify-center flex-col items-center">
        <Link to="/" className="cursor-pointer">
          <h1 className="flex items-center text-sm gap-3 text-white">
            Go back to Home
            <Icon icon="ic:baseline-home" className="text-lg" />
          </h1>
        </Link>
        <div className="my-5 flex justify-center w-full max-w-[54rem]">
          <div className="bg-appfadeGray px-5 py-3 w-full">
            <h2 className="font-bold text-2xl text-white mb-5">
              Sign in to OnePoint
            </h2>

            <div className="my-3">
              <div>
                <label htmlFor="" className="my-2">
                  Email Address
                </label>
                <div className="my-3 w-full">
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="py-3 px-4 w-full max-w-[23rem] rounded-md outline-slate-700 bg-appfadeGray/70 border border-appYellow/70"
                  />
                </div>
                <label htmlFor="" className="my-2">
                  Password
                </label>
                <div className="my-3">
                  <input
                    type="password"
                    placeholder="set password"
                    className="py-3 px-4 w-full max-w-[23rem] rounded-md outline-slate-700 bg-appfadeGray/70 border border-appYellow/70"
                  />
                </div>
              </div>
            </div>
            <div className="my-6">
              <div className="flex items-center gap-3 my-3 ">
                <div className="border-b-[1.3px] border-b-gray-500 w-full max-w-[10rem]"></div>
                <p>Or</p>
                <div className="border-b-[1.3px] border-b-gray-500 w-full max-w-[10rem]"></div>
              </div>
              <div className="flex items-center py-3 my-3 justify-center gap-3 w-full mx-auto">
                <Icon icon="flat-color-icons:google" className="text-xl" />
                <h2 className="text-base text-white/90">Sign up with Google</h2>
              </div>
            </div>
            <button className="w-full text-appBlack bg-appYellow max-w-[23rem] my-5 text-base font-semibold py-3.5 rounded-md px-4">
              Sign Up free
            </button>
          </div>
          <div className="bg-appYellow/80 py-3 px-4 w-full max-w-[27rem]">
            <img src={atmImage} alt="/" className="w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
