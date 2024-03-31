import Brand from "../components/sections/Brand";
import Divider from "../components/ui/Divider";
import HeroSlider from "../components/sections/HeroSlider";
import HowWeCanHelp from "../components/sections/HowWeCanHelp";
import Container from "../components/ui/Container";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <Brand /> */}
      {/* <Container>
        <Divider />
      </Container> */}
      <HowWeCanHelp />
      <Container>
        <Divider />
      </Container>
      <Projects />
    </>
  );
}
