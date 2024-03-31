import React from "react";
import Container from "../ui/Container";
import PowerfullValueCard from "../ui/PowerfullValueCard";
import SubtitleDot from "../ui/SubtitleDot";

const PowerFullValues = () => {
  const valuesData = [
    {
      title: "We Are",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "We Deep Dive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "We Take",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "We Value",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "We Believe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "We Say “We”",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-[100px] bg-[#F3F3F4]">
      <Container>
        <SubtitleDot subtitle="Discover Our Company" />

        <h3 className="text-[30px] md:text-[35px] lg:text-[42px] mb-[50px] md:mb-[80px] lg:mb-[120px]">
          We Live by <span className="highlight">Powerful</span> Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px]">
          {valuesData.map(({ title, description }, _i) => (
            <PowerfullValueCard
              key={_i}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PowerFullValues;
