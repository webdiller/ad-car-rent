import CarsHome from "@/widgets/CarsHome";
import React, { FC } from "react";

interface ComponentProps {}

const CatalogPage: FC<ComponentProps> = () => {
  return (
    <main className="bg-zinc-900">
      <CarsHome />
    </main>
  );
};

export default CatalogPage;
