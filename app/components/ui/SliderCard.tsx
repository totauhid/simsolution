import { NextPage } from "next";
import Image from "next/image";

interface Props {
  img: string | any;
  title: string;
  description: string;
  madeBy: string;
}

const SliderCard: NextPage<Props> = ({ img, title, description, madeBy }) => {
  return (
    <div className="group flex flex-col justify-center items-center px-5">
      <div className="relative w-full h-[300px] md:h-[340px] lg:h-[393px] rounded-[10px] overflow-hidden cursor-pointer transform duration-500 grayscale group-hover:grayscale-0">
        <Image
          src={img}
          alt={title}
          fill
          className="group-hover:scale-[1.01] transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col lg:flex-row mt-[30px] gap-5">
        <div className="flex-1">
          <h3 className="mb-[15px] lg:mb-[20px] text-[22px]">{title}</h3>
          <p>
            by: <span className="highlight">{madeBy}</span>
          </p>
        </div>
        <p className="flex-1 text-[#12182066]">{description}</p>
      </div>
    </div>
  );
};

export default SliderCard;
