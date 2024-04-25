import React from "react";
import Container from "../ui/Container";
import Divider from "../ui/Divider";
import WhyWorkWithCard from "../ui/WhyWorkWithCard";

import icon1 from "@/public/images/help-icon/6.svg";
import icon2 from "@/public/images/help-icon/7.svg";
import icon3 from "@/public/images/help-icon/2.svg";
import icon4 from "@/public/images/help-icon/4.svg";
import icon5 from "@/public/images/help-icon/5.svg";

import SubtitleDot from "../ui/SubtitleDot";

const WhyWorkWithUs = () => {
  const worksData = [
    {
      img: icon1,
      title: "Top Expertise",
      description:
        "Our team comprises seasoned professionals with a wealth of experience and a deep understanding of the latest trends and technologies in the digital landscape. From strategic planning to implementation, we bring unparalleled expertise to every project, ensuring optimal results and helping you stay ahead in today's competitive market. With our top-notch skills and commitment to excellence, we are your trusted partner for transforming ideas and businesses in the current digital era.",
    },
    {
      img: icon2,
      title: "Quality Management",
      description:
        "Quality management is at the core of everything we do. We are dedicated to delivering exceptional results that exceed expectations and drive success for our clients. Our rigorous quality management processes ensure that every project is executed with precision and attention to detail, from initial concept development to final implementation. We prioritize continuous improvement, regularly reviewing and refining our practices to uphold the highest standards of quality and excellence. With our unwavering commitment to quality management, you can trust us to deliver outstanding outcomes that propel your business forward in the digital era.",
    },
    {
      img: icon3,
      title: "Utmost Flexibility",
      description:
        "At our company, flexibility isn't just a buzzword—it's our guiding principle. We pride ourselves on our ability to adapt to the ever-changing demands of our clients and the market. Whether it's adjusting project timelines, accommodating new requirements, or pivoting strategies, we're committed to finding creative solutions that work for you. Our culture of flexibility empowers us to stay agile and responsive, ensuring that we deliver results that not only meet but exceed your expectations. With us, you can trust that your needs will always come first, no matter how they evolve.",
    },
    {
      img: icon4,
      title: "Agility",
      description:
        "Agility is the cornerstone of our approach at SIM Solution. We understand that in today's fast-paced business environment, the ability to pivot quickly and effectively is essential for success. That's why we embrace agility in everything we do, from project management to decision-making. Our streamlined processes and dynamic team enable us to respond promptly to changes, seize opportunities, and stay ahead of the curve. With a focus on adaptability and innovation, we empower our clients to navigate challenges and achieve their goals with confidence. When you partner with us, you're partnering with a team that thrives on agility and is dedicated to delivering results, no matter what the future holds.",
    },
    {
      img: icon5,
      title: "Innovation",
      description:
        "Innovation is more than just a buzzword at SIM Solution—it's our driving force. We're passionate about pushing the boundaries of what's possible and finding creative solutions to complex challenges. From groundbreaking ideas to cutting-edge technologies, innovation is woven into the fabric of our culture. Our team of forward-thinkers is constantly exploring new avenues and pushing the envelope to deliver transformative results for our clients. Whether it's developing pioneering products, revolutionizing processes, or reimagining business models, innovation is at the heart of everything we do. When you partner with us, you're partnering with a team that is committed to pushing the limits and shaping the future.",
    },
  ];

  return (
    <section className="py-[100px]">
      <Container>
        <SubtitleDot subtitle="Discover Our Company" />

        <h3 className="text-[30px] md:text-[35px] lg:text-[42px] mb-[50px] md:mb-[80px] lg:mb-[120px]">
          Why Work With Us
        </h3>

        <div>
          <Divider />
          {worksData.map(({ img, title, description }, _i) => (
            <div key={_i}>
              <WhyWorkWithCard
                img={img}
                title={title}
                description={description}
              />
              <Divider />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyWorkWithUs;
