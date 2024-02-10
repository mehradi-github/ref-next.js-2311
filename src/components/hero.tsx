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
    <div>
      <Image fill={true} src={src} alt={alt} style={{ objectFit: "cover" }} />
    </div>
  );
};
export default Hero;
