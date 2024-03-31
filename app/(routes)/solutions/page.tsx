import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import TechnologyCard from "@/app/components/ui/TechnologyCard";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="AI CONSULTING AND DEVELOPMENT" history="Solution" />
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="flex items-center gap-[10px]">
            <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
            <p>Our Tools</p>
          </div>
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

export default Page;
