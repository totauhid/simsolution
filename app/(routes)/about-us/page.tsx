import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="ENTERPRISE" history="About Us" />
      </section>

      <section className="py-[100px]">
        <Container>text</Container>
      </section>
    </>
  );
};

export default Page;
