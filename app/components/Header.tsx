"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../lib";
import { usePathname } from "next/navigation";
import Container from "./ui/Container";
import { useEffect, useState } from "react";
import { useStickyStore } from "@/lib/store";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const pathname = usePathname();
  const { stickyActive, setStickyActive } = useStickyStore();
  const [width, setWidth] = useState(window.innerWidth);

  const [mobileMenu, setMibileMenu] = useState<boolean>(false);

  console.log(pathname);

  useEffect(() => {
    const header = document.querySelector("header");

    if (width > 1024) {
      setStickyActive(false);
      header?.classList.remove("sticky-active");

      setMibileMenu(false);
    } else {
      setStickyActive(true);
      header?.classList.add("sticky-active");
    }

    window.addEventListener("scroll", () => {
      if (width > 1024) {
        if (window.scrollY > 50) {
          header?.classList.add("sticky-active");
          setStickyActive(true);
        } else {
          header?.classList.remove("sticky-active");
          setStickyActive(false);
        }

        setMibileMenu(false);
      } else {
        setStickyActive(true);
        header?.classList.add("sticky-active");
      }
    });

    // width
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname, width]);

  return (
    <header className="fixed top-0 z-[1000] w-full">
      <Container>
        <nav className="flex items-center h-[80px] md:h-[100px]">
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

          {/* humberger icon */}
          <div
            onClick={() => setMibileMenu((prev) => !prev)}
            className="ml-auto lg:hidden cursor-pointer"
          >
            {!mobileMenu ? <FiMenu size={28} /> : <MdOutlineClose size={28} />}
          </div>

          {/* mobile menu */}
          <ul
            className={`ml-auto items-center gap-5 flex-col fixed bg-white left-0 w-full top-[80px] md:top-[100px] py-8 md:py-12 border-t ${
              mobileMenu ? "flex" : "hidden"
            }`}
          >
            {navLinks.map((link) => (
              <li
                className={`relative pr-3 ${link.new ? "new" : ""}`}
                key={link.name}
              >
                <Link
                  onClick={() => setMibileMenu(false)}
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
