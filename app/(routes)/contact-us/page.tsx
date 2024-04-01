"use client";

import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import InputField from "@/app/components/ui/InputField";
import { NextPage } from "next";

interface Props {}

const ContactUs: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="LET’S DISCUSS YOUR OPPORTUNITY" history="Contact Us" />
      </section>

      <section className="py-[100px]">
        <Container>
          <div>
            <h3 className="text-[22px] mb-[60px]">
              <span className="highlight">01.</span> Tell Us About Yourself
            </h3>

            <div className="flex gap-[120px]">
              {/* form */}

              <form className="flex-1">
                <div className="grid grid-cols-2 gap-[30px]">
                  <InputField
                    type="text"
                    label="First Name"
                    placeholder="Jhon"
                  />
                  <InputField type="text" label="Last Name" placeholder="Doe" />
                </div>

                <div className="grid grid-cols-2 gap-[30px]">
                  <InputField
                    type="text"
                    label="Email Address"
                    placeholder="example@gmail.com"
                  />
                  <InputField
                    type="number"
                    label="Phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid grid-cols-2 gap-[30px]">
                  <InputField
                    type="text"
                    label="Company"
                    placeholder="Your Company name"
                  />
                  <InputField
                    type="text"
                    label="Role"
                    placeholder="Your role"
                  />
                </div>
              </form>

              {/* right side */}

              <div className="max-w-[292px] w-full bg-red-300">
                <h2>right sidebar</h2>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
