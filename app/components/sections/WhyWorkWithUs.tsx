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
        "Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.",
    },
    {
      img: icon2,
      title: "Quality Management",
      description:
        "Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.",
    },
    {
      img: icon3,
      title: "Utmost Flexibility",
      description:
        "Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.",
    },
    {
      img: icon4,
      title: "Agility",
      description:
        "Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.",
    },
    {
      img: icon5,
      title: "Innovation",
      description:
        "Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.",
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
