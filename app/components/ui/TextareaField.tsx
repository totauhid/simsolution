import { NextPage } from "next";

interface Props {
  label: string;
  placeholder: string;
  register?: object;
}

const TextareaField: NextPage<Props> = ({ label, placeholder, register }) => {
  return (
    <label className="shrink-0 flex-grow mb-[30px]">
      <span className="text-[16px] mb-[25px] inline-block">{label}</span>

      <textarea
        {...register}
        rows={4}
        className="border-b-2 focus:border-[#12182066] w-full focus:outline-0"
        placeholder={placeholder}
      ></textarea>
    </label>
  );
};

export default TextareaField;
