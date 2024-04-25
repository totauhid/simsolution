import { NextPage } from "next";

interface Props {
  title: string;
  description: string;
  serial: string;
  shape: "circle" | "square";
}

const SassCard: NextPage<Props> = ({ title, description, serial, shape }) => {
  return (
    <div className="relative sass-card">
      <div
        className={`h-[70px] w-[70px] bg-[#1218200D] text-[30px] grid place-items-center mb-[30px] ${
          shape === "square" ? "rounded-none" : "rounded-full"
        }`}
      >
        {serial}
      </div>
      <h4 className="text-[22px] mb-[15px]">{title}</h4>
      <p className="text-[#12182086]">{description}</p>
    </div>
  );
};

export default SassCard;
