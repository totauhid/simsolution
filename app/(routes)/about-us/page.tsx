"use client";

import PowerFullValues from "@/app/components/sections/PowerFullValues";
import SubHero from "@/app/components/sections/SubHero";
import TransformIdea from "@/app/components/sections/TransformIdea";
import WhyWorkWithUs from "@/app/components/sections/WhyWorkWithUs";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import { NextPage } from "next";

interface Props {}

const AboutUs: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="ENTERPRISE" history="About Us" />
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
            <p className="text-[20px] md:text-[22px]">
              We are committed to provide quality{" "}
              <span className="highlight"> solutions and services</span>,
              <br />
              on time that addresses every need of our customers.
            </p>

            <Button text="Talk To an Expert" variant="black" />
          </div>
        </Container>
      </section>

      <TransformIdea />
      <WhyWorkWithUs />
      <PowerFullValues />
    </>
  );
};

export default AboutUs;
