import { MetaProps } from "@/shared/types/meta";
import AboutUs from "@/widgets/About";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

interface ComponentProps {
  meta: MetaProps;
}

const AboutUsPage: FC<ComponentProps> = ({meta}) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <main className="flex-1 bg-zinc-900">
        <AboutUs />
      </main>
    </>
  );
};

export default AboutUsPage;
