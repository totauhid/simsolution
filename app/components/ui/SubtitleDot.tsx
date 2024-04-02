import { NextPage } from "next";

interface Props {
  subtitle: string;
  large?: boolean;
}

const SubtitleDot: NextPage<Props> = ({ subtitle, large }) => {
  return (
    <div className="flex items-center gap-[10px] mb-[30px]">
      <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
      <p className={large ? "text-[20px]" : "text-[16px]"}>{subtitle}</p>
    </div>
  );
};

export default SubtitleDot;
