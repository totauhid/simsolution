"use client";

import { NextPage } from "next";
import Image from "next/image";

import { useEffect } from "react";
import { useStickyStore } from "@/lib/state";
import Container from "../ui/Container";

import map from "@/public/images/map.png";
import perticles from "@/public/images/perticels-orange.svg";
import Link from "next/link";

interface Props {
  title: string;
  history: string;
}

const SubHero: NextPage<Props> = ({}) => {
  const { stickyActive, setStickyActive } = useStickyStore();

  useEffect(() => {
    const header = document.querySelector("header");
    header?.classList.add("sticky-active");
    setStickyActive(true);
  }, [stickyActive]);

  return (
    <div className="relative h-[550px] w-full">
      <div className="bg-[#F3F3F4] h-[550px]">
        <Container>
          <Image
            className="invert opacity-[0.05] absolute top-0 left-0 w-full h-full z-[3]"
            src={map}
            alt="map"
            fill
          />
          <div className="pt-52 flex justify-between z-10">
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center gap-4 text-[15px]">
                <Link
                  className="cursor-pointer z-20 hover:text-primary"
                  href={"/"}
                >
                  Home
                </Link>
                <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
                <span className="text-[#12182066]">Solutions</span>
              </div>

              <h3 className="text-[42px] text-[#121820]">
                SAAS DEVELOPMENT SERVICES
              </h3>
            </div>

            <Image
              src={perticles}
              alt="perticles"
              width={220}
              height={140}
              className="transform rotate-90"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SubHero;
