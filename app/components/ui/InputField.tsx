import { NextPage } from "next";

interface Props {
  type?: "text" | "number";
  label: string;
  placeholder: string;
}

const InputField: NextPage<Props> = ({ label, placeholder, type }) => {
  return (
    <label className="shrink-0 flex-grow mb-[30px]">
      <span className="text-[16px]">{label}</span>
      <input
        className="border-b-2 focus:border-[#12182066] h-[70px] w-full focus:outline-0"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
