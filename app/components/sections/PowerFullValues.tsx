import React from "react";
import Container from "../ui/Container";
import PowerfullValueCard from "../ui/PowerfullValueCard";

const PowerFullValues = () => {
  return (
    <section className="py-[100px] bg-[#F3F3F4]">
      <Container>
        <div className="flex items-center gap-[10px] mb-[30px]">
          <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
          <p>Discover Our Company</p>
        </div>

        <h3 className="text-[30px] md:text-[35px] lg:text-[42px] mb-[50px] md:mb-[80px] lg:mb-[120px]">
          We Live by <span className="highlight">Powerful</span> Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px]">
          <PowerfullValueCard
            title="We Are"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <PowerfullValueCard
            title="We Deep Dive"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <PowerfullValueCard
            title="We Take"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <PowerfullValueCard
            title="We Value"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <PowerfullValueCard
            title="We Believe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <PowerfullValueCard
            title="We Say “We”"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </Container>
    </section>
  );
};

export default PowerFullValues;
