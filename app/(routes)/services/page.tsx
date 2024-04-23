"use client";

import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import SassCard from "@/app/components/ui/SassCard";
import SubtitleDot from "@/app/components/ui/SubtitleDot";
import { NextPage } from "next";

interface Props {}

const Services: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="SAAS DEVELOPMENT SERVICES" history="Service" />
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="flex flex-col gap-[30px] mb-[90px]">
            <SubtitleDot subtitle="Services and Solutions" />

            <h3 className="text-[30px] md:text-[35px] lg:text-[42px]">
              Our SaaS Development Services Let You Win Big
            </h3>

            <p>
              Software as a Service (SaaS) development services encompass a
              range of activities involved in creating, deploying, and
              maintaining cloud-based applications accessible over the internet.
              These services cater to businesses looking to offer their software
              products on a subscription basis, eliminating the need for users
              to install and maintain the software locally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-x-[30px] gap-y-[60px]">
            <SassCard
              serial="01"
              shape="circle"
              title="SaaS Development Consulting"
              description="This phase involves understanding the client's requirements, identifying the target market, defining the scope of the software, and outlining the key features and functionalities."
            />

            <SassCard
              serial="02"
              shape="circle"
              title="SaaS Design and Prototyping"
              description="SaaS applications require scalable and flexible architectures to accommodate varying numbers of users and data loads. This phase involves designing the system architecture, database structure, user interface, and overall application flow."
            />

            <SassCard
              serial="03"
              shape="circle"
              title="End-to-End SaaS Development"
              description="Skilled developers write the code according to the specifications outlined in the design phase. The development may involve various technologies, including programming languages (such as Java, Python, or JavaScript), frameworks, libraries, and databases."
            />

            <SassCard
              serial="04"
              shape="circle"
              title="Migration to SaaS"
              description="Migrating to Software as a Service (SaaS) can offer numerous benefits, including scalability, accessibility, and reduced maintenance overhead. However, the migration process requires careful planning and execution to ensure a smooth transition."
            />

            <SassCard
              serial="05"
              shape="circle"
              title="Third Party Integrations"
              description="Integrating third-party services or APIs into your Software as a Service (SaaS) application can enhance its functionality, expand its capabilities, and provide additional value to your users. Here's how you can approach integrating third-party services with your SaaS application."
            />

            <SassCard
              serial="06"
              shape="circle"
              title="SaaS Support and Maintenance"
              description="SaaS development services also include ongoing maintenance and support to address any issues that may arise post-deployment. This includes bug fixes, security updates, performance optimization, and user support."
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
