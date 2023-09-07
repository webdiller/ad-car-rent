import { cars } from "@/shared/cars";
import { CarProps } from "@/shared/types";
import clsx from "clsx";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Translate } from "next-translate";
import { ReactNode } from "react";
interface CarPropsWithAnimation extends CarProps {
  delay: number;
  t: Translate;
  tCommon: Translate;
}

const AnimatedListItem = ({ delay, title, description, images, number, t, tCommon }: CarPropsWithAnimation) => {
  const { locale } = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the element enters the viewport.
    initialInView: false
  });
  const animation = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(5px)",
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(5px)",
    },
    config: { duration: 700 },
    delay: delay,
  });

  return (
    <animated.div ref={ref} style={animation}>
      <Link locale={locale} key={number} href={`/catalog/${number}`} className={clsx("group space-y-[20px] text-white transition-all duration-[1000ms]")}>
        <div className="relative overflow-hidden pb-[150%]">
          <img className="absolute inset-0 h-full w-full scale-105 object-cover transition-all duration-500 will-change-transform group-hover:scale-100" src={`/images/cars/${images[0]}`} alt="" />
          <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/60 group-hover:opacity-100">
            <div className="p-y-4 translate-y-[10px] space-y-4 px-6 opacity-0 transition-all duration-700 will-change-transform group-hover:translate-y-0 group-hover:opacity-100">
              {/* TODO: Add feature */}
              {/* <p className="text-[24px]">4X4</p> */}
              <p className="line-clamp-5 text-gray-300">
                <span className="font-bold">{title}</span> {t(description)}
              </p>
              <p className="text-[16px]">
                <span className="mr-2">{t("FROM")}</span>
                <span className="mr-[1px] text-[24px] text-[#bfa37c]">1000</span>
                <span className="align-super text-[20px] text-[#bfa37c]">{tCommon("CURRENCY")}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-[18px] transition-all duration-300 group-hover:text-[#bfa37c] sm:text-[22px]">{title}</p>
        </div>
      </Link>
    </animated.div>
  );
};

const CarsHome = () => {
  const { t } = useTranslation("carsHome");
  const { t: tCommon } = useTranslation("common");
  const animationTitle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 50,
  });

  const animationDescription = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 100,
  });

  return (
    <div className="container py-[50px] sm:py-[100px]">
      <div data-taos-offset="0" className="mb-10 grid gap-2 text-left text-white duration-[1000ms] sm:gap-4 md:mb-20 md:gap-10 lg:grid-cols-2">
        <animated.p style={animationTitle} className="text-[30px] leading-none md:text-[50px]">
          {t("TITLE_1") as ReactNode} <span className="text-[#bfa37c]">{t("TITLE_2")}</span> {t("TITLE_3") as ReactNode}
        </animated.p>
        <animated.div style={animationDescription} className="space-y-4 text-[18px]">
          <p className="text-[#a6a6a6] md:text-[20px]">{t("SUBTITLE")}</p>
          <a className="inline-block text-[#bfa37c]" href="tel:+955591819946">
            <span>{t("HOTLINE")}: +955 591 81 99 46</span>
          </a>
        </animated.div>
      </div>
      <div data-taos-offset="100" className="aos:opacity-0 grid gap-5 gap-y-10 duration-300 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map(({ number, title, images, description }, index) => {
          const startIndx = index + 1;
          const delay = startIndx * 200;
          return <AnimatedListItem t={t} tCommon={tCommon} images={images} number={number} key={index} description={description} title={title} delay={delay} />;
        })}
      </div>
    </div>
  );
};

export default CarsHome;
