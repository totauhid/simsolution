"use client";

import Slider from "react-slick";

import Container from "../ui/Container";
import SliderCard from "../ui/SliderCard";

import project1 from "@/public/images/project/project-1.jpg";
import project2 from "@/public/images/project/project-2.jpg";
import project3 from "@/public/images/project/project-3.jpg";
import project4 from "@/public/images/project/project-4.jpg";

import { settings } from "../slider/project-slider/settings";


const Projects = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <h2 className="text-[30px] md:text-[35px] lg:text-[42px]">
          Latest Projects
        </h2>

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
