import { NextPage } from "next";

interface Props {
  text: string;
  variant: "primary" | "black";
  fullWidth?: boolean;
  submit?: boolean;
}

const Button: NextPage<Props> = ({ text, variant, fullWidth, submit }) => {
  const color =
    (variant === "primary" && "text-[#ffffff]") ||
    (variant === "black" && "text-[#121820]");

  return (
    <button
      type={submit ? "submit" : "button"}
      className={`py-[18px] lg:py-[22.5px] px-[60px] rounded-full border-2 border-btn shrink-0  ${color} ${
        fullWidth && "w-full"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
