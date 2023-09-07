import { MetaProps } from "@/shared/types/meta";
import CarsHome from "@/widgets/CarsHome";
import { NextSeo } from "next-seo";
import React, { FC } from "react";

interface ComponentProps {
  meta: MetaProps;
}

const CatalogPage: FC<ComponentProps> = ({ meta }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <main className="bg-zinc-900">
        <CarsHome />
      </main>
    </>
  );
};

export default CatalogPage;
