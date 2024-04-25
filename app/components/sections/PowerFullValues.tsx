import React from "react";
import Container from "../ui/Container";
import PowerfullValueCard from "../ui/PowerfullValueCard";
import SubtitleDot from "../ui/SubtitleDot";

const PowerFullValues = () => {
  const valuesData = [
    {
      title: "We Are",
      description:
        "We are defined by our powerful values, which guide every aspect of our work and interactions. Integrity is the cornerstone of everything we do, ensuring honesty, transparency, and accountability in all our endeavors. Excellence is our standard, driving us to consistently deliver exceptional results that exceed expectations. Collaboration is our strength, fostering a culture of teamwork, respect, and diversity that empowers us to achieve more together. Innovation fuels our passion, inspiring us to push boundaries, embrace change, and drive positive transformation. With these values as our compass, we are committed to making a meaningful impact and building lasting relationships with our clients and partners.",
    },
    {
      title: "We Deep Dive",
      description:
        "We pride ourselves on our ability to deep dive into every aspect of our work. This means we don't just scratch the surface; we immerse ourselves fully to understand the intricacies and nuances of each project or challenge. By delving deep, we uncover valuable insights, identify opportunities, and develop tailored strategies that drive meaningful results. Our commitment to deep diving ensures that we leave no stone unturned, enabling us to deliver comprehensive solutions that truly make an impact. When you partner with us, you can trust that we'll go the extra mile to explore every detail and unlock the full potential of your endeavors.",
    },
    {
      title: "We Take",
      description:
        "We take initiative. In a world of endless possibilities, we believe in seizing opportunities and making things happen. Proactivity is at the core of our ethos, empowering us to anticipate needs, identify solutions, and drive positive change. We take ownership of our actions and outcomes, demonstrating accountability and a commitment to excellence in everything we do. By taking the lead, we inspire others to follow and create a ripple effect of progress and success. With initiative as our driving force, we're ready to tackle any challenge and turn vision into reality..",
    },
    {
      title: "We Value",
      description:
        "We value integrity above all else, conducting ourselves with honesty, transparency, and ethical principles in every interaction. Excellence is our pursuit, as we strive to deliver the highest quality of work and exceed expectations at every opportunity. Collaboration is our cornerstone, recognizing the power of teamwork, diversity, and mutual respect in achieving shared goals. Innovation drives us forward, encouraging creativity, adaptability, and a relentless pursuit of new ideas and solutions. These values guide us in everything we do, shaping our culture and driving us towards our collective vision of success.",
    },
    {
      title: "We Believe",
      description:
        "We believe in the power of belief itself. It's the driving force behind every endeavor, every innovation, and every success. We believe in the potential of ideas to shape the future, in the resilience of individuals and organizations to overcome challenges, and in the collective strength of collaboration to achieve greatness. Our belief fuels our passion, guides our actions, and inspires us to constantly strive for excellence. With belief as our compass, there's no limit to what we can achieve together.",
    },
    {
      title: "We Say “We”",
      description:
        "We say “we” because we recognize the power of collaboration and teamwork. Every success, every achievement, and every milestone is a result of the collective effort of our team. By embracing a collaborative mindset, we leverage the diverse strengths, perspectives, and expertise of each team member to achieve our shared goals. Saying “we” reflects our commitment to unity, mutual support, and shared responsibility. Together, we're stronger, more resilient, and better equipped to overcome challenges and reach new heights. With “we” as our mantra, we celebrate the spirit of togetherness and the endless possibilities it brings.",
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
