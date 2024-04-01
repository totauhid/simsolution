"use client";

import SubHero from "@/app/components/sections/SubHero";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import InputField from "@/app/components/ui/InputField";
import TextareaField from "@/app/components/ui/TextareaField";
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
          <div className="flex gap-[120px]">
            {/* form */}
            <form className="flex-1">
              {/* step 01 */}
              <h3 className="text-[22px] mb-[30px] lg:mb-[60px]">
                <span className="highlight">01.</span> Tell Us About Yourself
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
                <InputField type="text" label="First Name" placeholder="Jhon" />
                <InputField type="text" label="Last Name" placeholder="Doe" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
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

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
                <InputField
                  type="text"
                  label="Company"
                  placeholder="Your Company name"
                />
                <InputField type="text" label="Role" placeholder="Your role" />
              </div>

              {/* step 02 */}
              <h3 className="text-[22px] my-[30px] lg:my-[60px]">
                <span className="highlight">02.</span> What Can We Help You
                With?
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                <InputField
                  type="text"
                  label="Product Design"
                  placeholder="Web Designer"
                />
              </div>

              {/* step 03 */}
              <h3 className="text-[22px] my-[30px] lg:my-[60px]">
                <span className="highlight">03.</span> Tell Us About Your
                Project
              </h3>

              <div className="grid grid-cols-1 gap-[30px]">
                <TextareaField
                  label="Project Description"
                  placeholder="Your Message"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                <InputField
                  type="number"
                  label="Project Budget"
                  placeholder="123"
                />
              </div>

              <div className="mt-4">
                <Button text="Submit Now" variant="black" fullWidth />
              </div>
            </form>

            {/* right side */}

            <div className="max-w-[292px] w-full bg-red-300">
              <h2>right sidebar</h2>
              <h2>right sidebar</h2>
              <h2>right sidebar</h2>
              <h2>right sidebar</h2>
              <h2>right sidebar</h2>
              <h2>right sidebar</h2>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
