import { NextPage } from "next";
import Container from "../ui/Container";
import { brandImg } from "@/lib";
import Image from "next/image";

interface Props {}

const Brand: NextPage<Props> = ({}) => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 place-items-center">
          {brandImg.map((img, _i) => (
            <div key={_i} className="relative brand-circle">
              <Image
                className="grayscale hover:grayscale-0 transition-colors cursor-pointer"
                src={img.src}
                alt={img.alt}
                height={40}
                width={150}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Brand;
