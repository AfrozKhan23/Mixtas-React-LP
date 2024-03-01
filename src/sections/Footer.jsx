import React, { useEffect } from "react";
import { footericons } from "../components/export";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import footerlogo from "../assets/clients/footer-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section className="light bg-white w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6">
        <div
          data-aos="zoom-in"
          id="icon-boxes"
          className="flex justify-between lg:items-center items-start lg:flex-row flex-col w-full gap-6"
        >
          {footericons.map((item, index) => (
            <div key={index} className="flex justify-center items-center gap-3">
              <div
                id="icon-box"
                className="border-2 dark:text-white border-slate-300 rounded-full p-4 hover:bg-black hover:text-white cursor-pointer"
              >
                {item.icon && <item.icon className="w-[25px] h-[25px]" />}
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="text-2xl text-black font-semibold dark:text-white">
                  {item.title}
                </h1>
                <p className="text-[17px] text-slate-600 dark:text-white">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="main-footer"
        className="light bg-black w-full text-white px-10 lg:py-20 py-10 grid lg:grid-cols-5 grid-cols-1 justify-between items-start gap-4"
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-start gap-5"
        >
          <img src={footerlogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            placeat voluptatum alias id, repudiandae facilis dignissimos
            delectus quas ipsum quibusdam veniam cum veritatis debitis magni
            praesentium non repellat nihil optio.
          </p>
          <div id="social-icons" className="grid grid-cols-4 gap-3">
            <div
              id="social-icon-box"
              className="border-2 border-slate-600 rounded-full p-3 hover:text-black hover:bg-white cursor-pointer transform hover:scale-125"
            >
              <FaFacebook className="w-[20px] h-[20px]" />
            </div>
            <div
              id="social-icon-box"
              className="border-2 border-slate-600 rounded-full p-3 hover:text-black hover:bg-white cursor-pointer transform hover:scale-125"
            >
              <FaLinkedin className="w-[20px] h-[20px]" />
            </div>
            <div
              id="social-icon-box"
              className="border-2 border-slate-600 rounded-full p-3 hover:text-black hover:bg-white cursor-pointer transform hover:scale-125"
            >
              <FaTwitter className="w-[20px] h-[20px]" />
            </div>
            <div
              id="social-icon-box"
              className="border-2 border-slate-600 rounded-full p-3 hover:text-black hover:bg-white cursor-pointer transform hover:scale-125"
            >
              <FaInstagram className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center items-start gap-3"
        >
          <h1 className="text-xl font-semibold">About Us</h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Our Story
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Mission & Values
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer htransform hover:scale-25 hover:font-bold">
            Meet the team
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Sustainibility Efforts
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Brand Partnerships
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Influender Collabortions
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex flex-col justify-center items-start gap-3"
        >
          <h1 className="text-xl font-semibold">Accessibility</h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Our Story
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Mission & Values
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Meet the team
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Sustainibility Efforts
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Brand Partnerships
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Influender Collabortions
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className="flex flex-col justify-center items-start gap-3"
        >
          <h1 className="text-xl font-semibold">Join our Community</h1>
          <h1 className="text-[15]text-lg text-slate-300">Our Story</h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Mission & Values
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Meet the team
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Sustainibility Efforts
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Brand Partnerships
          </h1>
          <h1 className="text-[15] text-slate-300 cursor-pointer transform hover:scale-25 hover:font-bold">
            Influender Collabortions
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="flex flex-col justify-center items-start gap-6 w-full"
        >
          <h1 className="text-2xl font-bold">Let's get in touch</h1>
          <p className="text-[14px]">Signup for our newsletter & get 50% off</p>
          <div
            id="form"
            className="flex justify-start items-center gap-1 bg-white rounded-xl p-2 w-full"
          >
            <input
              type="email"
              placeholder="Enter Your email address"
              className="px-4 py-2 w-full"
            />
            <button className="text-black pr-3">
              <FaArrowRightLong className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
