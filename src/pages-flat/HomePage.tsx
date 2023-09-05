import CarsHome from "@/widgets/CarsHome";
import Features from "@/widgets/Features";
import SaveMoney from "@/widgets/SaveMoney";
import React, { FC } from "react";
import dynamic from "next/dynamic";
import WelcomeLoader from "@/widgets/welcome/WelcomeLoader";
const WelcomeSlider = dynamic(import("@/widgets/welcome/WelcomeSlider"), {
  loading: () => <WelcomeLoader />,
});

interface ComponentProps {}

const HomePage: FC<ComponentProps> = () => {
  return (
    <main className="bg-zinc-900">
      <WelcomeSlider />
      <CarsHome />
      <Features />
      <SaveMoney />
    </main>
  );
};

export default HomePage;
