import Hero from "@/components/hero";
import React, { FC } from "react";

const page: FC = () => {
  return (
    <div>
      <Hero
        title="Dmitrii Vaccinium"
        src="https://picsum.photos/800/600?image=1026"
        alt="Performance"
      />
    </div>
  );
};
export default page;
