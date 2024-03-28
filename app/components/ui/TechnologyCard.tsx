import { NextPage } from "next";

interface Props {
  title: string;
}

const TechnologyCard: NextPage<Props> = ({ title }) => {
  return (
    <div className="grid place-content-center h-[100px] rounded-[5px] border border-[#E7E7E8] hover:shadow-[0_0_40px_0_rgba(18,24,32,.1)] transition duration-[.4s]">
      {title}
    </div>
  );
};

export default TechnologyCard;
