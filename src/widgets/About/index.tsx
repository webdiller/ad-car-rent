import React from "react";
import { useSpring, animated } from "react-spring";
import useTranslation from "next-translate/useTranslation";

const AboutUs = () => {
    const { t } = useTranslation("about");
  const useAnimateElement = (delay: number) => {
    return useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 300 },
      delay,
    });
  };

  return (
    <div className="container py-[50px] sm:py-[100px]">
      <div className="mb-10 border-b-[1px] border-white/10 pb-4 text-left text-white">
        <animated.p style={useAnimateElement(100)} className="text-[30px] md:text-[50px]">
            {t("TITLE")}
        </animated.p>
        <animated.p style={useAnimateElement(200)} className="text-[#a6a6a6] md:text-[20px]">
            {t("SUBTITLE")}
        </animated.p>
      </div>

      <div className="mb-10 text-lg text-white sm:text-2xl">
        <animated.p style={useAnimateElement(300)}>{t("PARAGRAPHS.0.TEXT")}</animated.p>
        <animated.p style={useAnimateElement(400)}>{t("PARAGRAPHS.1.TEXT")}</animated.p>
        <animated.p style={useAnimateElement(500)}>{t("PARAGRAPHS.2.TEXT")}</animated.p>
      </div>

      <div className="space-y-4 text-lg text-white sm:text-2xl">
        <animated.p style={useAnimateElement(600)}>{t("PARAGRAPHS.3.TEXT")}</animated.p>
        <animated.p style={useAnimateElement(900)} className="text-2xl text-[#bfa37c] md:text-3xl">
            {t("PARAGRAPHS.4.TEXT")}
        </animated.p>
      </div>
    </div>
  );
};

export default AboutUs;
