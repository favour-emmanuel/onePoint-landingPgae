import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  return (
    <div id="contact" className="my-10 lg:px-14 px-7">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="font-semibold lg:text-4xl text-3xl">
          <h1 className="my-1">We're Here To Assist You.</h1>
          <h1 className="w-full max-w-[36rem] leading-[3.5rem]">
            If Any{" "}
            <span className="text-appYellow">Questions Or Need Support,</span>{" "}
            Don't Hesitate To Get In Touch.
          </h1>
        </div>
        <button className="w-full max-w-[10rem]  lg:my-0 my-4 py-4 font-semibold px-3.5 rounded-lg text-appBlack bg-appYellow text-base">
          Get In Touch
        </button>
      </div>

      {/* contact form */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[15rem] lg:items-center my-5">
        {/* form fields */}
        <div className="my-4 bg-appfadeGray px-3.5 py-4 rounded-lg w-full max-w-[40rem]">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full">
              {/* input for name */}
              <div className="w-full">
                <div className="mb-2">
                  <label htmlFor="name" className="text-base font-semibold">
                    Name
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none py-3.5 px-2.5 text-sm bg-[#323232] rounded-md my-4 w-full "
                />
              </div>
              {/* input for email */}
              <div className="w-full">
                <div className="mb-2">
                  <label htmlFor="name" className="text-base font-semibold">
                    Email
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="outline-none py-3.5 px-2.5 text-sm bg-[#323232] rounded-md my-4 w-full "
                />
              </div>
              <div className="flex gap-3 my-2 items-center">
                <input type="checkbox" className="bg-transparent" />
                <p className="text-[13px]">
                  I agree with{" "}
                  <span className="text-appYellow">Terms of Use</span>and{" "}
                  <span className="text-appYellow">Privacy Policy</span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="py-3.5 px-3 rounded-md bg-[#323232] mb-6">
                <textarea
                  placeholder="Your message"
                  required="required"
                  className="w-full text-sm bg-transparent outline-none h-[5.8rem]"
                ></textarea>
              </div>
              <button className="flex justify-between rounded-md items-center gap-3 py-3 px-2.5 mt-8  bg-appYellow text-appBlack font-semibold text-base w-full ">
                Send Message
                <span>
                  <Icon icon="pepicons-pop:send" />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* icons */}
        <div className=" py-3 px-4">
          <div className="flex gap-4 items-center w-full max-w-[16rem] my-5">
            <span>
              <Icon icon="solar:phone-linear" className="text-lg" />
            </span>
            <div>
              <h1 className="text-base font-semibold">Call</h1>
              <p className="text-sm">Sheduale a call</p>
            </div>
          </div>
          <div className="flex gap-4 items-center  w-full max-w-[16rem] my-5">
            <span>
              <Icon icon="octicon:bug-24" className="text-lg" />
            </span>
            <div>
              <h1 className="font-semibold text-base">Bug</h1>
              <p className="text-sm">Report a bug</p>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full max-w-[16rem] my-5">
            <span>
              <Icon icon="ic:round-live-help" className="text-lg" />
            </span>
            <div>
              <h1 className="text-base font-semibold">Help</h1>
              <p className="text-sm">Ask a question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
