import { NextPage } from "next";
import Divider from "./Divider";
import Image from "next/image";
import SingleDivider from "./SingleDivider";

interface Props {
  img: string;
  serial: string;
  title: string;
  description: string;
}

const ServiceCard: NextPage<Props> = ({ img, serial, title, description }) => {
  return (
    <div>
      <SingleDivider />
      <div className="flex gap-20 py-[30px]">
        <div className="relative help-circle h-[45px] w-[45px] shrink-0 ml-[30px] z-10 after:bg-primary">
          <Image src={img} fill alt="icon" />
        </div>
        <div>
          <div className="flex items-center gap-4 text-[18px] mt-[10px] mb-[30px]">
            <span className="highlight">{serial}</span>
            <h5>{title}</h5>
          </div>
          <p className="text-[#12182066]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
