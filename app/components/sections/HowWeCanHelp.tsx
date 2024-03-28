import React from "react";
import Container from "../ui/Container";
import Service from "../ui/Service";

import icon1 from "@/public/images/help-icon/1.svg";
import icon2 from "@/public/images/help-icon/2.svg";
import icon3 from "@/public/images/help-icon/3.svg";
import icon4 from "@/public/images/help-icon/4.svg";
import icon5 from "@/public/images/help-icon/5.svg";
import icon6 from "@/public/images/help-icon/6.svg";

const HowWeCanHelp = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <h2 className="text-[42px]">
          How We Can <span className="highlight">Help You</span>
        </h2>

        <div className="flex justify-between gap-8">
          <div>
            <h4 className="text-[22px] text-[#121820] mt-[30px] mb-[60px]">
              IT Services
            </h4>
            <Service
              img={icon1}
              serial="01"
              title="Dedicated Team"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Service
              img={icon2}
              serial="02"
              title="QA and Testing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Service
              img={icon3}
              serial="03"
              title="SaaS"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <div>
            <h4 className="text-[22px] text-[#121820] mt-[30px] mb-[60px]">
              IT Solutions
            </h4>
            <Service
              img={icon4}
              serial="04"
              title="Blockchain"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Service
              img={icon5}
              serial="05"
              title="Artificial Intelligence"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Service
              img={icon6}
              serial="06"
              title="Internet of Things"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeCanHelp;
