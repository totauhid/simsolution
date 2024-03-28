import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import SassCard from "@/app/components/ui/SassCard";
import ServiceCard from "@/app/components/ui/ServiceCard";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="SAAS DEVELOPMENT SERVICES" history="Service" />
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="flex flex-col gap-[30px] mb-[90px]">
            <div className="flex items-center gap-[10px]">
              <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
              <p>Services and Solutions</p>
            </div>
            <h3 className="text-[42px]">
              Our SaaS Development Services Let You Win Big
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="grid grid-cols-3 place-content-center gap-x-[30px] gap-y-[60px]">
            <SassCard
              serial="01"
              shape="circle"
              title="SaaS Development Consulting"
              description="Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily."
            />

            <SassCard
              serial="02"
              shape="square"
              title="SaaS Design and Prototyping"
              description="Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily."
            />

            <SassCard
              serial="03"
              shape="circle"
              title="End-to-End SaaS Development"
              description="Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily."
            />

            <SassCard
              serial="04"
              shape="square"
              title="Migration to SaaS"
              description="Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily."
            />

            <SassCard
              serial="05"
              shape="circle"
              title="Third Party Integrations"
              description="Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily."
            />

            <SassCard
              serial="06"
              shape="square"
              title="SaaS Support and Maintenance"
              description="Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily."
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
