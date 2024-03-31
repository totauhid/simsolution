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
              <Image
                src={"/images/logo.png"}
                height={30}
                width={140}
                alt="sim-logo"
              />
            ) : (
              <Image
                src={"/images/logo-dark.png"}
                height={30}
                width={140}
                alt="sim-logo"
              />
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
