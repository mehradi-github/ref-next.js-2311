import Hero from "@/components/hero";
import React, { FC } from "react";

const page: FC = () => {
  return (
    <div>
      <Hero
        title="Matthew Wiebe"
        src="https://picsum.photos/800/600?image=972"
        alt="Scale"
      />
    </div>
  );
};
export default page;
