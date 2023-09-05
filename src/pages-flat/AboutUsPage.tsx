import AboutUs from "@/widgets/About";
import React, { FC } from "react";

interface ComponentProps {}

const AboutUsPage: FC<ComponentProps> = () => {
  return (
    <main className="bg-zinc-900 flex-1">
      <AboutUs />
    </main>
  );
};

export default AboutUsPage;
