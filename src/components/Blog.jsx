import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import blogImage from "../assets/blogImage.png";
import img1 from "../assets/blp-1.png";
import img2 from "../assets/blp-2.png";
import img3 from "../assets/blp-3.png";

const getStarted = [
  {
    title: "Sign Up",
    text: "Join our platform today with a simple sign-up process and unlock a world of financial possibilities. ",
  },
  {
    title: "Learn More",
    text: " Discover in-depth insights about our services and how FinTechXperience can transform your financial future. ",
  },
  {
    title: "Contact Us",
    text: " Reach out to our dedicated support team for any questions or assistance you may need. We're here to help ",
  },
];

const blogPost = [
  {
    img: img1,
    title: "Exploring Trends and Innovations",
    text: "In this post, we delve into the rapidly evolving landscape of digital payments, discuss the latest trends & innovations that are shaping the way we conduct transactions to modern world. See more... ",
  },
  {
    img: img2,
    title: "World Of Cryptocurrencies",
    text: "This blog post serves as a beginner's guide to the world of cryptocurrencies, explaining what they are, how they work, and the potential benefits and risks of investing in them. See more...",
  },
  {
    img: img3,
    title: "Long-Term Financial Goals",
    text: "In this blog post, we offer practical tips and strategies for readers to enhance their financial well-being. We cover tonics such as budaetina, savina ",
  },
];

const Blog = () => {
  return (
    <div id="blog" className="lg:py-16 py-10 lg:px-14 px-7">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full max-w-[40rem]">
          <div className="text-3xl lg:text-4xl font-semibold">
            <h1 className="my-2"> Join the</h1>
            <h1 className="w-full my-3">
              {" "}
              FinTech <span className="text-appYellow">Revolution</span>
            </h1>
          </div>
          <p className="text-base w-full max-w-[22rem] my-5 text-appGray">
            <span className="font-semibold">
              {" "}
              Ready to take control of your financial future?{" "}
            </span>{" "}
            Join On Point Fintech today and experience finance like never
            before. It's time to embark on a journey where your financial
            aspirations become a reality.
          </p>
          <button className="bg-appYellow font-semibold my-5 text-appBlack py-3.5 px-3 rounded-lg border-none w-full max-w-[8.8rem]">
            Join Now
          </button>
        </div>
        <div className="w-full max-w-[50rem] mb-2">
          <img src={blogImage} alt="" className="w-[40rem]" />
        </div>
      </div>

      {/* Get started with */}
      <div className="my-6">
        <h1 className="text-3xl lg:text-4xl font-semibold my-4">
          Get <span className="text-appYellow">Started</span> With !
        </h1>
        <div className="mt-8 flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-y-4">
          {getStarted.map((item, index) => (
            <div
              key={index}
              className="my-3 border-t-[1.8px] border-t-appGray/70 max-w-[18rem]"
            >
              <h1 className="text-[19px] my-2 underline text-appYellow flex items-center gap-2">
                {item.title}
                <a href="">
                  <Icon icon="proicons:open" className="text-lg" />
                </a>
              </h1>
              <p className="text-[14.8px] max-w-[16rem]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* latest blog section */}
      <div className="my-8">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-4xl text-3xl font-semibold my-4">
            Latest <span className="text-appYellow">Blog</span> Posts
          </h1>
          <p className="text-base font-semibold cursor-pointer hover:text-gray-500">
            See More
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 my-5  gap-y-7 lg:gap-x-6">
          {blogPost.map((post, index) => (
            <div key={index} className="border border-appGray p-3 rounded-md">
              <img src={post.img} alt="" className="w-full" />
              <h1 className="text-lg my-2">{post.title}</h1>
              <p className="text-[14.8px] leading-6 my-2">
                {post.text}
                <span className="text-appYellow">See More</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
