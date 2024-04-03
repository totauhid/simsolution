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
      "Sim Soultion dedicated team is to ensure the smooth functioning of an organization's technology infrastructure, as well as to develop and implement IT strategies aligned with the business goals. They are responsible for maintaining hardware and software systems, troubleshooting technical issues, implementing new technologies, and providing support to end-users.",
  },
  {
    img: icon2,
    serial: "02",
    title: "QA and Testing",
    description:
      "Sim Solution offers businesses a flexible, cost-effective, and scalable solution for accessing and using software applications, driving productivity, innovation, and competitiveness in today's digital economy such as CRM and Accounting solutions.",
  },

  {
    img: icon3,
    serial: "03",
    title: "SaaS",
    description:
      "Sim Solution offers businesses a flexible, cost-effective, and scalable solution for accessing and using software applications, driving productivity, innovation, and competitiveness in today's digital economy such as CRM and Accounting solutions.",
  },
];

const solutionsData = [
  {
    img: icon4,
    serial: "04",
    title: "Software Applications",
    description:
      "Software applications provide specific functionality to meet business requirements, such as enterprise resource planning (ERP) systems, customer relationship management (CRM) software, human resource management systems (HRMS), accounting software, and collaboration tools.",
  },
  {
    img: icon5,
    serial: "05",
    title: "Enterprise Mobility",
    description:
      "Enterprise mobility solutions enable employees to access business applications and data from mobile devices, such as smartphones and tablets. This includes mobile device management (MDM), mobile application management (MAM), and enterprise mobility management (EMM) solutions.",
  },

  {
    img: icon6,
    serial: "06",
    title: "Digital Transformation:",
    description:
      "Digital transformation solutions help organizations leverage technology to streamline processes, enhance customer experiences, and drive innovation. This includes technologies such as artificial intelligence (AI), machine learning (ML), internet of things (IoT), robotic process automation (RPA), and blockchain.",
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
