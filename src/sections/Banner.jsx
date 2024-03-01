import React, { useEffect } from "react";
import banner2 from "../assets/banner2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section className="light bg-white w-full lg:px-20 px-10 lg:py-20 py-8 flex lg:flex-row flex-col justify-center items-center gap-6">
      <div className="lg:w-[50%] w-full">
        <img src={banner2} alt="banner image" data-aos="zoom-in" />
      </div>
      <div className="lg:w-[50%] w-full lg:p-10 flex flex-col justify-center items-center gap-8">
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="uppercase text-2xl text-slate-500 dark:text-white line-clamp-5 text-center"
        >
          upto 60% off
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="lg:text-5xl text-4xl font-bold text-black dark:text-white line-clamp-5 text-center"
        >
          Unleash Your Style <br />
          Potential with our <br />
          Spectacular Clothong Sale
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-clip text-xl text-slate-700 dark:text-white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          quia eligendi quisquam sapiente distinctio nulla consequuntur
          repudiandae eum perspiciatis numquam doloribus aliquid iusto minima
          tenetur, tempora, illo esse? Repellat, consequuntur.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="800"
          className="px-10 py-4 text-lg text-white bg-black dark:bg-white dark:text-black font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
