"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../lib";
import { usePathname } from "next/navigation";
import Container from "./ui/Container";
import { useEffect, useState } from "react";
import { useStickyStore } from "@/lib/store";

const Header = () => {
  const pathname = usePathname();
  const { stickyActive, setStickyActive } = useStickyStore();

  useEffect(() => {
    setStickyActive(false);
    const header = document.querySelector("header");
    header?.classList.remove("sticky-active");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header?.classList.add("sticky-active");
        setStickyActive(true);
      } else {
        header?.classList.remove("sticky-active");
        setStickyActive(false);
      }
    });
  }, [pathname]);

  return (
    <header className="fixed top-0 z-[1000] w-full">
      <Container>
        <nav className="flex items-center h-[100px]">
          <Link href={"/"}>
            {!stickyActive ? (
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/logo1.png"}
                  height={40}
                  width={40}
                  alt="sim-logo"
                  style={{
                    backgroundSize: "cover",
                  }}
                />

                <span className="text-[#fff]">SIM SOLUTION LTD</span>
              </div>
            ) : (
              <div className="flex items-center text-white gap-3">
                <Image
                  src={"/images/logo1.png"}
                  height={40}
                  width={40}
                  alt="sim-logo"
                />

                <span className="text-[#121820]">SIM SOLUTION LTD</span>
              </div>
            )}
          </Link>

          <ul className="ml-auto items-center gap-7 hidden lg:flex">
            {navLinks.map((link) => (
              <li
                className={`relative pr-3 ${link.new ? "new" : ""}`}
                key={link.name}
              >
                <Link
                  href={link.path}
                  className={`text-white font-medium ${
                    pathname == link.path ? " active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
