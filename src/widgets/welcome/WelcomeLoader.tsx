import React, { FC } from "react";
interface ComponentProps {}

const WelcomeLoader: FC<ComponentProps> = () => {
  return <div className="relative h-[calc(100vh)]"></div>;
};

export default WelcomeLoader;
