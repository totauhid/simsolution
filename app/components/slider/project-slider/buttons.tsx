import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="group hover:text-primary transition absolute z-20 right-0 top-0 inline-flex items-center gap-2 justify-center text-[16px] cursor-pointer transform -translate-y-[80px]"
      onClick={onClick}
    >
      <span className="hidden md:block group-hover:text-primary transition">
        Next
      </span>
      <IoArrowForwardOutline />
    </div>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="group hover:text-primary transition absolute z-20 right-0 top-0 inline-flex items-center gap-2 justify-center text-[16px] cursor-pointer transform -translate-y-[80px] -translate-x-[50px] md:-translate-x-[100px]"
      onClick={onClick}
    >
      <IoArrowBackOutline />
      <span className="hidden md:block group-hover:text-primary transition">
        Prev
      </span>
    </div>
  );
};
