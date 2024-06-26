import { NextPage } from "next";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  img: string;
}

const WhyWorkWithCard: NextPage<Props> = ({ title, description, img }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-[60px] gap-5">
      <div className="flex flex-grow justify-between items-center gap-5">
        <div className="relative help-circle h-[45px] w-[45px] shrink-0 z-10">
          <Image src={img} fill alt="icon" />
        </div>
        <h4 className="max-w-[300px] w-full text-[22px]">{title}</h4>
      </div>
      <p className="max-w-[655px] w-full text-[#12182086]">{description}</p>
    </div>
  );
};

export default WhyWorkWithCard;
