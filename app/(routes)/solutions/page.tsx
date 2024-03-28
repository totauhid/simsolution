import SubHero from "@/app/components/sections/SubHero";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <section>
      <SubHero title="test" history="page" />
      hi my name js asasas
    </section>
  );
};

export default Page;
