import React, { FC } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";
import animateElement from "@/shared/hooks/animateElement";

interface ComponentProps {}

const Features: FC<ComponentProps> = () => {
  const { t } = useTranslation("features");

  const [rootRef, rootRefInView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the element enters the viewport.
    initialInView: false,
  });

  const animationTitle = useSpring({
    from: { opacity: 0 },
    to: { opacity: rootRefInView ? 1 : 0 },
    config: { duration: 300 },
    delay: 100,
  });

  const animationSubtitle = useSpring({
    from: { opacity: 0 },
    to: { opacity: rootRefInView ? 1 : 0 },
    config: { duration: 300 },
    delay: 300,
  });

  const featuresData = [
    { title: "LIST.0.TITLE", description: "LIST.0.DESCRIPTION" },
    { title: "LIST.1.TITLE", description: "LIST.1.DESCRIPTION" },
    { title: "LIST.2.TITLE", description: "LIST.2.DESCRIPTION" },
    { title: "LIST.3.TITLE", description: "LIST.3.DESCRIPTION" },
    { title: "LIST.4.TITLE", description: "LIST.4.DESCRIPTION" },
    { title: "LIST.5.TITLE", description: "LIST.5.DESCRIPTION" },
  ];

  return (
    <div className="container py-[50px] sm:py-[100px]">
      <div ref={rootRef} className="mb-10 border-b-[1px] border-white/10 pb-4 text-left text-white">
        <animated.p style={animationTitle} className="text-[30px] md:text-[50px]">
          {t("TITLE")}
        </animated.p>
        <animated.p style={animationSubtitle} className="text-[#a6a6a6] md:text-[20px]">
          {t("SUBTITLE")}
        </animated.p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {featuresData.map((featureItem, indx) => {
          const { title, description } = featureItem;
          const count = indx + 1;
          const delay = count * 300;

          const animation = animateElement({
            animationProps: {
              from: { opacity: 0 },
              to: { opacity: rootRefInView ? 1 : 0 },
              config: { duration: 300 },
              delay,
            },
          });

          return (
            <animated.div style={animation} key={title} className={`space-y-2 text-white`}>
              <p className="text-lg sm:text-2xl">{t(title)}</p>
              <p className="text-[#a6a6a6] sm:text-[18px]">{t(description)}</p>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
