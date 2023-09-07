import CarsHome from "@/widgets/CarsHome";
import Features from "@/widgets/Features";
import SaveMoney from "@/widgets/SaveMoney";
import React, { FC } from "react";
import dynamic from "next/dynamic";
import WelcomeLoader from "@/widgets/welcome/WelcomeLoader";
import { MetaProps } from "@/shared/types/meta";
const WelcomeSlider = dynamic(import("@/widgets/welcome/WelcomeSlider"), {
  loading: () => <WelcomeLoader />,
  ssr: true,
});
import { NextSeo } from "next-seo";

interface ComponentProps {
  meta: MetaProps;
}

const HomePage: FC<ComponentProps> = ({ meta }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <main className="bg-zinc-900">
        <WelcomeSlider />
        <CarsHome />
        <Features />
        <SaveMoney />
      </main>
    </>
  );
};

export default HomePage;
