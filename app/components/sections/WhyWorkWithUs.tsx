import React from "react";
import Container from "../ui/Container";
import Divider from "../ui/Divider";
import WhyWorkWithCard from "../ui/WhyWorkWithCard";

import icon1 from "@/public/images/help-icon/6.svg";
import icon2 from "@/public/images/help-icon/7.svg";
import icon3 from "@/public/images/help-icon/2.svg";
import icon4 from "@/public/images/help-icon/4.svg";
import icon5 from "@/public/images/help-icon/5.svg";

const WhyWorkWithUs = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="flex items-center gap-[10px] mb-[30px]">
          <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
          <p>Discover Our Company</p>
        </div>

        <h3 className="text-[42px] mb-[120px]">Why Work With Us</h3>

        <div>
          <Divider />
          <WhyWorkWithCard
            img={icon1}
            title="Top Expertise"
            description="Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
          />
          <Divider />
          <WhyWorkWithCard
            img={icon2}
            title="Quality Management"
            description="Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
          />
          <Divider />
          <WhyWorkWithCard
            img={icon3}
            title="Utmost Flexibility"
            description="Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
          />
          <Divider />
          <WhyWorkWithCard
            img={icon4}
            title="Agility"
            description="Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
          />
          <Divider />
          <WhyWorkWithCard
            img={icon5}
            title="Innovation"
            description="Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
          />
          <Divider />
        </div>
      </Container>
    </section>
  );
};

export default WhyWorkWithUs;
