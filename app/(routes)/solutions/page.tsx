"use client";

import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import SubtitleDot from "@/app/components/ui/SubtitleDot";
import TechnologyCard from "@/app/components/ui/TechnologyCard";
import { NextPage } from "next";

interface Props {}

const Solutions: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="AI CONSULTING AND DEVELOPMENT" history="Solution" />
      </section>

      <section className="py-[100px]">
        <Container>
          <SubtitleDot subtitle="Our Tools" />

          <h3 className="text-[30px] md:text-[35px] lg:text-[42px] mt-[30px] mb-[90px]">
            AI Development <span className="highlight">Tech Stack</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            <TechnologyCard title="JavaScript" />
            <TechnologyCard title="Python" />
            <TechnologyCard title="GCloud" />
            <TechnologyCard title="Java" />
            <TechnologyCard title="MySQL" />
            <TechnologyCard title="ONNX" />
            <TechnologyCard title="Kotlin" />
            <TechnologyCard title="Swift" />
            <TechnologyCard title="PHP" />
            <TechnologyCard title="MariaDB" />
            <TechnologyCard title="AWS" />
            <TechnologyCard title="React" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Solutions;
