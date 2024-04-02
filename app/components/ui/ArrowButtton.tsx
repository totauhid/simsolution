import { NextPage } from "next";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

interface Props {
  text: string;
}

const ArrowButtton: NextPage<Props> = ({ text }) => {
  return (
    <Link className="flex items-center gap-3 group" href={"/"}>
      <span>{text}</span>
      <span className="inline-flex items-center justify-center h-[35px] w-[35px] bg-primary text-white rounded-full group-hover:translate-x-[5px] transition">
        <IoArrowForward />
      </span>
    </Link>
  );
};

export default ArrowButtton;
