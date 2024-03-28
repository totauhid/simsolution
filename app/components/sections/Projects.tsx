"use client";

import Slider from "react-slick";

import Container from "../ui/Container";
import SliderCard from "../ui/SliderCard";

import project1 from "@/public/images/project/project-1.jpg";
import project2 from "@/public/images/project/project-2.jpg";
import project3 from "@/public/images/project/project-3.jpg";
import project4 from "@/public/images/project/project-4.jpg";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Projects = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-20 right-0 top-0 inline-flex items-center gap-2 justify-center text-[16px] cursor-pointer transform -translate-y-[90px]"
        onClick={onClick}
      >
        Next
        <IoArrowForwardOutline />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-20 right-0 top-0 inline-flex items-center gap-2 justify-center text-[16px] cursor-pointer transform -translate-y-[90px] -translate-x-[100px]"
        onClick={onClick}
      >
        <IoArrowBackOutline />
        Prev
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-[100px]">
      <Container>
        <h2 className="text-[42px] text-[#121820]">Latest Projects</h2>

        <div className="py-12 relative">
          <Slider {...settings}>
            <SliderCard
              img={project1}
              title="Easy & Most Powerful Server Platform."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              madeBy="Jane Meldrum"
            />

            <SliderCard
              img={project2}
              title="Easy & Most Powerful Server Platform."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              madeBy="Jane Meldrum"
            />
            <SliderCard
              img={project3}
              title="Easy & Most Powerful Server Platform."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              madeBy="Jane Meldrum"
            />

            <SliderCard
              img={project4}
              title="Easy & Most Powerful Server Platform."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              madeBy="Jane Meldrum"
            />
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
