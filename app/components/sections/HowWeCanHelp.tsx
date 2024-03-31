import React from "react";
import Container from "../ui/Container";
import Service from "../ui/ServiceCard";

import icon1 from "@/public/images/help-icon/1.svg";
import icon2 from "@/public/images/help-icon/2.svg";
import icon3 from "@/public/images/help-icon/3.svg";
import icon4 from "@/public/images/help-icon/4.svg";
import icon5 from "@/public/images/help-icon/5.svg";
import icon6 from "@/public/images/help-icon/6.svg";

const servicesData = [
  {
    img: icon1,
    serial: "01",
    title: "Dedicated Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: icon2,
    serial: "02",
    title: "QA and Testing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    img: icon3,
    serial: "03",
    title: "SaaS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const solutionsData = [
  {
    img: icon4,
    serial: "04",
    title: "Blockchain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: icon5,
    serial: "05",
    title: "Artificial Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    img: icon6,
    serial: "06",
    title: "Internet of Things",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const HowWeCanHelp = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <h2 className="text-[30px] md:text-[35px] lg:text-[42px]">
          How We Can <span className="highlight">Help You</span>
        </h2>

        <div className="flex-row lg:flex justify-between gap-8">
          <div>
            <h4 className="text-[22px] text-[#121820] mt-[30px] mb-[30px] lg:mb-[60px]">
              IT Services
            </h4>
            {servicesData.map(({ img, serial, title, description }, _i) => (
              <Service
                key={_i}
                img={img}
                serial={serial}
                title={title}
                description={description}
              />
            ))}
          </div>

          <div>
            <h4 className="text-[22px] text-[#121820] mt-[30px] mb-[30px] lg:mb-[60px]">
              IT Solutions
            </h4>
            {solutionsData.map(({ img, serial, title, description }, _i) => (
              <Service
                key={_i}
                img={img}
                serial={serial}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeCanHelp;
