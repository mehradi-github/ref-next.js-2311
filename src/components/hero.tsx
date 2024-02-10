import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { FC } from "react";
import Image from "next/image";
interface Iprop {
  src: string | StaticImport;
  alt: string;
  title: string;
}
const Hero: FC<Iprop> = ({ src, alt, title }: Iprop) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image fill={true} src={src} alt={alt} style={{ objectFit: "cover" }} />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};
export default Hero;
