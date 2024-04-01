"use client";

import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import { IoMdAdd } from "react-icons/io";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { settings } from "../slider/hero-slider/settings";

const sliderItems = [
  {
    src: "/images/slider/slider-1.jpg",
    alt: "slider-1",
  },

  {
    src: "/images/slider/slider-2.jpg",
    alt: "slider-2",
  },

  {
    src: "/images/slider/slider-3.jpg",
    alt: "slider-3",
  },
];

export default function SimpleSlider() {
  return (
    <section className="relative bg-[#3E434A]">
      <Slider {...settings}>
        {sliderItems.map((slider, _i) => (
          <div
            key={_i}
            className="relative w-full h-[80vh] md:h-[70vh] lg:h-[100vh]"
          >
            <Image
              className="grayscale"
              src={slider.src}
              fill
              alt={slider.alt}
            />

            <div className="bg-[#121820cc] absolute top-0 left-0 right-0 bottom-0 z-10" />
          </div>
        ))}
      </Slider>

      <div className="absolute z-20 flex items-center top-0 left-0 right-0 bottom-0">
        <Container>
          <div className="text-white flex gap-16">
            <div className="flex flex-col gap-8 md:gap-8 lg:gap-16">
              <p className="text-[18px] text-white">
                The Next <span className="highlight">Gen</span>
              </p>

              <h1 className="text-[1.8rem] md:text-[2.2rem] lg:text-[3.2vw] leading-normal">
                WE PROVIDE SERVICES <br /> AND SOLUTIONS{" "}
                <span className="highlight font-satisfied">To Enterprise</span>
              </h1>
              <div>
                <div className="flex flex-col-reverse items-start md:flex-row gap-12">
                  <Button text="Let's Talk" variant="primary" />
                  <p className="text-[#ffffff80] text-[15px] leading-normal">
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit, sed do eiusmod tempor incididunt <br />
                    ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden goals-container">
              {/* item 01 */}
              <div className="absolute top-0 left-0 flex items-center group transform translate-x-[90px] translate-y-[50px]">
                <div className="peer flex items-center gap-4 cursor-pointer">
                  <div className="relative bg-[#ffffff1a] h-12 w-12 grid place-content-center rounded-full group-hover:bg-primary transition-colors shrink-0">
                    <IoMdAdd size={22} />
                    <span className="animate-ping absolute group-hover:inline-flex h-full w-full rounded-full bg-white opacity-40 hidden transition"></span>
                  </div>
                  <span className="group-hover:text-primary transition-colors shrink-0 text-white">
                    Dedicated Team
                  </span>
                </div>

                <div className="absolute card w-[260px] bg-white rounded-[5px] p-5 transform transition-[2000ms] -translate-x-[110px] -translate-y-[140px] opacity-0 invisible peer-hover:visible peer-hover:-translate-y-[130px] peer-hover:opacity-100">
                  <h3 className="text-black">Experts</h3>
                  <span className="divider relative"></span>
                  <p className=" text-[#12182066]">
                   With expertise across various IT domains, our team collaborates closely with stakeholders to deliver tailored solutions and support the organization's strategic objectives.
                  </p>
                </div>
              </div>

              {/* item 02 */}
              <div className="absolute top-0 left-0 flex items-center group transform translate-x-[300px] translate-y-[180px]">
                <div className="peer flex items-center gap-4 cursor-pointer">
                  <div className="relative bg-[#ffffff1a] h-12 w-12 grid place-content-center rounded-full group-hover:bg-primary transition-colors shrink-0">
                    <IoMdAdd size={22} />
                    <span className="animate-ping absolute group-hover:inline-flex h-full w-full rounded-full bg-white opacity-40 hidden transition"></span>
                  </div>
                  <span className="group-hover:text-primary transition-colors text-white">
                    Developer
                  </span>
                </div>

                <div className="absolute card w-[260px] bg-white rounded-[5px] p-5 transform transition-[2000ms] -translate-x-[110px] -translate-y-[140px] opacity-0 invisible peer-hover:visible peer-hover:-translate-y-[130px] peer-hover:opacity-100">
                  <h3 className="text-black">Experts</h3>
                  <span className="divider relative"></span>
                  <p className=" text-[#12182066]">
                    Maintaining systems, utilizing various programming languages and tools to bring ideas to life and solve complex problems in technology-driven environments. 
                  </p>
                </div>
              </div>

              {/* item 03 */}
              <div className="absolute top-0 left-0 flex items-center group transform translate-x-[180px] translate-y-[300px]">
                <div className="peer flex items-center gap-4 cursor-pointer">
                  <div className="relative bg-[#ffffff1a] h-12 w-12 grid place-content-center rounded-full group-hover:bg-primary transition-colors shrink-0">
                    <IoMdAdd size={22} />
                    <span className="animate-ping absolute group-hover:inline-flex h-full w-full rounded-full bg-white opacity-40 hidden transition"></span>
                  </div>
                  <span className="group-hover:text-primary transition-colors text-white">
                    Designers
                  </span>
                </div>

                <div className="absolute card w-[260px] bg-white rounded-[5px] p-5 transform transition-[2000ms] -translate-x-[110px] -translate-y-[140px] opacity-0 invisible peer-hover:visible peer-hover:-translate-y-[130px] peer-hover:opacity-100">
                  <h3 className="text-black">Experts</h3>
                  <span className="divider relative"></span>
                  <p className=" text-[#12182066]">
                    Designers collaborate with stakeholders, including developers and clients, to transform ideas into tangible designs that enhance brand identity, usability, and overall aesthetics.                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
