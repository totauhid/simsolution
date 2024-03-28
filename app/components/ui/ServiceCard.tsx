import { NextPage } from "next";
import { IconType } from "react-icons";

interface Props {
  title: string;
  description: string;
  Icon: IconType;
}

const ServiceCard: NextPage<Props> = ({ title, description, Icon }) => {
  return (
    <div className="shadow-lg p-5 rounded-md flex flex-col items-center m-5">
      <Icon size={50} className="text-brand" />
      <h4 className="my-4 text-xl">{title}</h4>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
