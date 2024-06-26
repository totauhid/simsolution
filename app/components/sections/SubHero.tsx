"use client";

import { NextPage } from "next";
import Image from "next/image";

import { useEffect } from "react";
import { useStickyStore } from "@/lib/store";
import Container from "../ui/Container";

import map from "@/public/images/map.png";
import perticles from "@/public/images/perticels-orange.svg";
import Link from "next/link";

interface Props {
  title: string;
  history: string;
}

const SubHero: NextPage<Props> = ({ title, history }) => {
  const { stickyActive, setStickyActive } = useStickyStore();

  useEffect(() => {
    const header = document.querySelector("header");
    header?.classList.add("sticky-active");
    setStickyActive(true);
  }, [stickyActive, setStickyActive]);

  return (
    <div className="w-full">
      <div className="bg-[#F3F3F4] h-[400px] lg:h-[550px] relative">
        <Container>
          <Image
            className="invert opacity-[0.05] absolute top-0 left-0 w-full h-full z-[3]"
            src={map}
            alt="map"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="pt-44 lg:pt-60 flex justify-between z-10 relative">
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center gap-4 text-[15px]">
                <Link
                  className="cursor-pointer z-20 hover:text-primary"
                  href={"/"}
                >
                  Home
                </Link>
                <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
                <span className="text-[#12182066]">{history}</span>
              </div>

              <h3 className="text-[25px] md:text-[2.8vw]">{title}</h3>
            </div>

            <Image
              src={perticles}
              alt="perticles"
              width={220}
              height={140}
              className="transform rotate-90 absolute right-0 -z-[1] opacity-50 md:opacity-100"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SubHero;
