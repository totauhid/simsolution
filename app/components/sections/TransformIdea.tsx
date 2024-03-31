import Image from "next/image";
import React from "react";
import Container from "../ui/Container";

const TransformIdea = () => {
  return (
    <section className="py-[100px] bg-[#F3F3F4]">
      <Container>
        <div className="flex justify-between items-center gap-32">
          <div className="shrink-0 relative w-[28vw] h-[28vw]">
            <div className="bg-primary w-[28vw] h-[28vw] absolute top-0 left-0 rounded-full"></div>
            <div className="absolute w-[29vw] h-[29vw] -top-[21px] -left-[14px] rounded-full overflow-dhidden">
              <Image
                className="rounded-full grayscale"
                src="/images/eye-gudget.png"
                fill
                alt="eye"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-[10px] mb-[30px]">
              <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
              <p>Firm Overview</p>
            </div>
            <h3 className="text-[42px]">
              We Specialize in <br />
              <span className="highlight">Transforming Your Idea</span> or{" "}
              <br />
              Business in The Current <br /> Digital Era.
            </h3>

            <p className="text-[15px] text-[#12182066] my-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.s
            </p>

            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[15px]">
                <Image
                  src="/images/checkbox.svg"
                  height={22}
                  width={22}
                  alt="check"
                />
                <p>Quis suspendisse ultrices gravida.</p>
              </div>

              <div className="flex items-center gap-[15px]">
                <Image
                  src="/images/checkbox.svg"
                  height={22}
                  width={22}
                  alt="check"
                />
                <p>Consectetur adipiscing elit.</p>
              </div>

              <div className="flex items-center gap-[15px]">
                <Image
                  src="/images/checkbox.svg"
                  height={22}
                  width={22}
                  alt="check"
                />
                <p>Quis suspendisse ultrices gravida.</p>
              </div>

              <div className="flex items-center gap-[15px]">
                <Image
                  src="/images/checkbox.svg"
                  height={22}
                  width={22}
                  alt="check"
                />
                <p>Consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransformIdea;