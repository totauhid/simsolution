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
              <Link className="hover:text-primary" href={"/"}>
                Facebook
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                Instagram
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                Linkedin
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                Twitter
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                YouTube
              </Link>
            </div>

            <div className="flex gap-6">
              <Link className="hover:text-primary" href={"/"}>
                Terms & Condition
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                Privacy Policy
              </Link>
              <Link className="hover:text-primary" href={"/"}>
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="text-white py-4 text-center">
            All Rights Reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
