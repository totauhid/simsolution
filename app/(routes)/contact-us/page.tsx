"use client";

import SubHero from "@/app/components/sections/SubHero";
import ArrowButtton from "@/app/components/ui/ArrowButtton";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import Divider from "@/app/components/ui/Divider";
import InputField from "@/app/components/ui/InputField";
import SubtitleDot from "@/app/components/ui/SubtitleDot";
import TextareaField from "@/app/components/ui/TextareaField";
import { NextPage } from "next";
import Image from "next/image";

import icon8 from "@/public/images/help-icon/8.svg";
import icon9 from "@/public/images/help-icon/9.svg";

interface Props {}

const ContactUs: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="LET’S DISCUSS YOUR OPPORTUNITY" history="Contact Us" />
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-[120px] ">
            {/* left side form */}
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
            <div className="lg:max-w-[292px] w-full">
              <div className="mb-[60px]">
                <SubtitleDot subtitle="Support Request" large />
                <p className="mt-[30px] mb-[20px]">
                  Our experts are ready to answer your questions.
                </p>
                <ArrowButtton text="Support Now" />
              </div>

              <div className="mb-[60px]">
                <Divider />
              </div>

              <div className="mb-[60px]">
                <div className="relative sass-card">
                  <div
                    className={`h-[70px] w-[70px] bg-[#1218200D] text-[30px] grid place-items-center mb-[30px] rounded-full`}
                  >
                    <Image src={icon8} height={42} width={42} alt="icon" />
                  </div>
                </div>
                <SubtitleDot subtitle="Need Help?" large />
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>

              <div className="mb-[60px]">
                <div className="relative sass-card">
                  <div
                    className={`h-[70px] w-[70px] bg-[#1218200D] text-[30px] grid place-items-center mb-[30px] rounded-full`}
                  >
                    <Image src={icon9} height={42} width={42} alt="icon" />
                  </div>
                </div>

                <SubtitleDot subtitle="Need More Info?" large />
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>

              <div className="mb-[60px]">
                <Divider />
              </div>

              <div className="flex flex-col gap-[15px]">
                <ArrowButtton text="Legality Guide" />
                <ArrowButtton text="Security Center" />
              </div>
            </div>
          </div>

          {/* map section */}
        </Container>
        <div className="mt-[70px] lg:mt-[100px] grayscale">
          <iframe
            className="h-[300px] md:h-[450px] lg:h-[550px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4341.291500542269!2d90.38723939889319!3d23.7980919854986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c746db04c093%3A0xbe64860ddee947aa!2sMaster%20Builder%20Limited%20(Corp.%20Office)!5e0!3m2!1sen!2sbd!4v1712029933188!5m2!1sen!2sbd"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
