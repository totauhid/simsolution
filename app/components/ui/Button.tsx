import { NextPage } from "next";
import { FiLoader } from "react-icons/fi";
interface Props {
  text: string;
  variant: "primary" | "black";
  fullWidth?: boolean;
  submit?: boolean;
  isPending?: boolean;
}

const Button: NextPage<Props> = ({
  text,
  variant,
  fullWidth,
  submit,
  isPending,
}) => {
  const color =
    (variant === "primary" && "text-[#ffffff]") ||
    (variant === "black" && "text-[#121820]");

  return (
    <button
      type={submit ? "submit" : "button"}
      className={`py-[18px] lg:py-[22.5px] px-[60px] rounded-full border-2 border-btn shrink-0 flex items-center justify-center gap-2  ${color} ${
        fullWidth && "w-full"
      }`}
    >
      {submit && isPending && <FiLoader size={20} className="animate-spin" />}
      {submit && !isPending ? text : "Submitting form..."}
    </button>
  );
};

export default Button;
