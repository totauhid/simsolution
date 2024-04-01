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
  const [width, setWidth] = useState<number>(); // Initialize width to null or another sensible default for SSR

  const [mobileMenu, setMobileMenu] = useState(false);

  console.log(width);

  useEffect(() => {
    if (width && width < 1024) {
      const header = document.querySelector("header");
      setStickyActive(true);
      header?.classList.add("sticky-active");
    } else {
      const header = document.querySelector("header");
      setStickyActive(false);
      header?.classList.remove("sticky-active");
    }
    // Define a function to update the width
    const updateWidth = () => setWidth(window.innerWidth);

    // Update width to current window width upon mount
    updateWidth();

    // Subscribe to window resize event
    window.addEventListener("resize", updateWidth);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      // Ensure `width` is not null to avoid execution on server render
      if (width && width > 1024) {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header?.classList.add("sticky-active");
          setStickyActive(true);
        } else {
          header?.classList.remove("sticky-active");
          setStickyActive(false);
        }
        setMobileMenu(false);
      } else {
        const header = document.querySelector("header");
        setStickyActive(true);
        header?.classList.add("sticky-active");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [width]); // Reacting to changes in `width`

  // Rest of your component...
  return (
    <header className={`fixed top-0 z-[1000] w-full`}>
      <Container>
        <nav className="flex items-center h-[80px] md:h-[100px]">
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <Image
                src={"/images/logo1.png"}
                height={40}
                width={40}
                alt="sim-logo"
              />

              <span
                className={`${stickyActive ? "text-[#121820]" : "text-white"}`}
              >
                SIM SOLUTION LTD
              </span>
            </div>
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
            onClick={() => setMobileMenu((prev) => !prev)}
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
                  onClick={() => setMobileMenu(false)}
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
