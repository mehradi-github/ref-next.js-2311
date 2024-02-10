import Hero from "@/components/hero";
import React, { FC } from "react";

const page: FC = () => {
  return (
    <div>
      <Hero
        title="Manuel Barroso Parejo"
        src="https://picsum.photos/800/600?image=977"
        alt="Reliability"
      />
    </div>
  );
};
export default page;
