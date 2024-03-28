import { NextPage } from "next";
import Container from "./ui/Container";
import Link from "next/link";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className="bg-[#171717ff]">
      <div className="bg-[#121820]">
        <Container>
          <div className="flex justify-between text-white py-[50px]">
            <div className="flex gap-6">
              <Link className="hover:text-primary transition-colors" href={"/"}>
                Facebook
              </Link>
              <Link className="hover:text-primary transition-colors" href={"/"}>
                Instagram
              </Link>
              <Link className="hover:text-primary transition-colors" href={"/"}>
                Linkedin
              </Link>
              <Link className="hover:text-primary transition-colors" href={"/"}>
                Twitter
              </Link>
              <Link className="hover:text-primary transition-colors" href={"/"}>
                YouTube
              </Link>
            </div>

            <div className="flex gap-6">
              <Link className="hover:text-primary transition-colors" href={"/"}>
                Terms & Condition
              </Link>
              <Link className="hover:text-primary transition-colors" href={"/"}>
                Privacy Policy
              </Link>
              <Link className="hover:text-primary transition-colors" href={"/"}>
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="py-[30px] text-center flex justify-between">
            <span className="text-[15px] text-[#585d63]">&cpoy; SIM 2024</span>
            <span className="text-[15px] text-[#585d63]">
              All Rights Reserved.
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
