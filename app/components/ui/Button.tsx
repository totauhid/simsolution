import { NextPage } from "next";

interface Props {
  text: string;
  variant: "primary" | "black";
}

const Button: NextPage<Props> = ({ text, variant }) => {
  const color =
    (variant === "primary" && "text-[#ffffff]") ||
    (variant === "black" && "text-[#121820]");

  return (
    <button
      className={`py-[18px] lg:py-[22.5px] px-[60px] rounded-full border-2 border-btn flex shrink-0 items-center ${color}`}
    >
      {text}
    </button>
  );
};

export default Button;
