import { NextPage } from "next";

interface Props {
  subtitle: string;
}

const SubtitleDot: NextPage<Props> = ({ subtitle }) => {
  return (
    <div className="flex items-center gap-[10px] mb-[30px]">
      <span className="h-[7px] w-[7px] bg-primary rounded-full inline-block"></span>
      <p>{subtitle}</p>
    </div>
  );
};

export default SubtitleDot;
