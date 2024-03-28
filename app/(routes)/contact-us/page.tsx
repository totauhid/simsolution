import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="LET’S DISCUSS YOUR OPPORTUNITY" history="Contact Us" />
      </section>

      <section className="py-[100px]">
        <Container>text</Container>
      </section>
    </>
  );
};

export default Page;
