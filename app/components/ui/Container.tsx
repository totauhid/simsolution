import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const Container: NextPage<Props> = ({ children }) => {
  return <div className="max-w-[1400px] px-6 m-auto w-full">{children}</div>;
};

export default Container;
