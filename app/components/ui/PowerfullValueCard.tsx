import { NextPage } from "next";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const PowerfullValueCard: NextPage<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-[20px] md:gap-[30px]">
      <div className="h-[75px] w-[75px] bg-[#E8E8EA] rounded-full grid place-content-center">
        <div className="relative help-circle h-[40px] w-[40px] shrink-0 z-10">
          <Image src="/images/help-icon/7.svg" fill alt="icon" />
        </div>
      </div>
      <h4 className="max-w-[300px] w-full text-[22px]">{title}</h4>
      <p className="max-w-[655px] w-full text-[#12182086]">{description}</p>
    </div>
  );
};

export default PowerfullValueCard;
