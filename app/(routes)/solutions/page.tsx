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
        <SubHero title="CONSULTING AND DEVELOPMENT" history="Solution" />
      </section>

      <section className="py-[100px]">
        <Container>
          <SubtitleDot subtitle="Our Tools" />

          <h3 className="text-[30px] md:text-[35px] lg:text-[42px] mt-[30px] mb-[90px]">
            Development <span className="highlight">Tech Stack</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            <TechnologyCard title="ASP.NET" />
            <TechnologyCard title="Java" />
            <TechnologyCard title="JavaScript" />
            <TechnologyCard title="Python" />
            <TechnologyCard title="Node.js" />
            <TechnologyCard title="Express.js" />
            <TechnologyCard title="React.js" />
            <TechnologyCard title="React Native" />
            <TechnologyCard title="Next.js" />
            <TechnologyCard title="Kotlin" />
            <TechnologyCard title="Swift" />
            <TechnologyCard title="PHP" />
            <TechnologyCard title="MySQL" />
            <TechnologyCard title="MongoDB" />
            <TechnologyCard title="Oracle" />
            <TechnologyCard title="AWS" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Solutions;
