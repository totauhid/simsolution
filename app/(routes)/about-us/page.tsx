import SubHero from "@/app/components/sections/SubHero";
import Container from "@/app/components/ui/Container";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <SubHero title="ENTERPRISE" history="About Us" />
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="flex justify-between items-center">
            <p className="text-[22px]">
              Lorem ipsum dolor sit amet,{" "}
              <span className="highlight">consectetur adipiscing elit</span>,
              <br />
              sed do eiusmod tempor incididunt ut labor aliqua.
            </p>

            <button className="lets-talk-btn text-black">
              Talk To an Expert
            </button>
          </div>
        </Container>
      </section>

      <section className="py-[100px]">
        <Container>
          <div className="flex justify-between gap-24">
            <div className="shrink-0">
              <div className="bg-primary  w-[22vw]  h-[22vw]">sd</div>
              <div>{/* image link */}</div>
            </div>

            <div>
              <div className="flex items-center gap-[10px]">
                <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
                <p>Firm Overview</p>
              </div>
              <h3 className="text-[42px]">
                We Specialize in Transforming Your Idea or Business in The
                Current Digital Era.
              </h3>

              <p className="text-[15px] text-[#12182066]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.s
              </p>

              <div>
                <div>
                  {/* icon link */}
                  <p>Quis suspendisse ultrices gravida.</p>
                </div>

                <div>
                  {/* icon link */}
                  <p>Quis suspendisse ultrices gravida.</p>
                </div>

                <div>
                  {/* icon link */}
                  <p>Quis suspendisse ultrices gravida.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
