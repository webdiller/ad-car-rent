import { cars } from "@/shared/cars";
import { CarProps } from "@/shared/types";
import clsx from "clsx";
import { useSpring, animated } from "react-spring";
import { InView, useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Translate } from "next-translate";
import { FC, ReactNode } from "react";
import { useMedia } from "react-use";
import { removePlusAndSpaces } from "@/shared/helpers/removePlusAndSpaces";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { contacts } from "@/shared/contacts";
import Image from "next/image";
interface CarPropsWithAnimation extends CarProps {
  delay: number;
  t: Translate;
  tCommon: Translate;
}

interface ComponentProps {}

const AnimatedListItem = ({ delay, title, description, images, number, prices, t, tCommon }: CarPropsWithAnimation) => {
  const isWide = useMedia("(min-width: 640px)", true);
  const { locale } = useRouter();

  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation only once when the element enters the viewport.
    initialInView: false,
    onChange: async (inView, entry) => {
      const linkElement = entry.target.firstChild as HTMLAnchorElement | null;

      if (!linkElement || isWide) return;

      setTimeout(() => {
        if (linkElement && inView) {
          linkElement.focus({
            preventScroll: true,
          });
        }
        if (linkElement && !inView) {
          linkElement.blur();
        }
      }, 2000);
    },
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
      <Link locale={locale} key={number} href={`/catalog/${number}`} className={clsx("group space-y-[20px] text-white outline transition-all duration-[1000ms]")}>
        <div className="relative overflow-hidden pb-[150%]">
          <Image
            fill
            quality={50}
            className="absolute inset-0 h-full w-full scale-105 object-cover object-bottom transition-all duration-500 will-change-transform group-hover:scale-100 group-focus:scale-100"
            src={`/images/cars/${images[0]}`}
            alt={title}
          />
          <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/60 group-hover:opacity-100 group-focus:bg-black/60 group-focus:opacity-100">
            <div className="p-y-4 translate-y-[10px] space-y-4 px-6 opacity-0 transition-all duration-700 will-change-transform group-hover:translate-y-0 group-hover:opacity-100  group-focus:translate-y-0 group-focus:opacity-100">
              {/* TODO: Add feature */}
              {/* <p className="text-[24px]">4X4</p> */}
              <p className="line-clamp-5 text-gray-300 sm:text-[20px]">
                <span className="font-bold sm:text-[20px]">{title}</span> {t(description)}
              </p>

              {/* TODO: Add prices */}
              {/* <p className="text-[16px]">
                <span className="mr-2">{t("FROM")}</span>
                <span className="mr-[1px] text-[24px] text-[#bfa37c]">1000</span>
                <span className="align-super text-[20px] text-[#bfa37c]">{tCommon("CURRENCY_DOLLAR")}</span>
              </p> */}
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-[18px] transition-all duration-300 group-hover:text-[#bfa37c] sm:text-[22px] lg:text-[30px]">{title}</p>
        </div>
      </Link>
    </animated.div>
  );
};

const CarsHome: FC<ComponentProps> = () => {
  const { t } = useTranslation("carsHome");
  const { t: tCommon } = useTranslation("common");
  const animationTitle = useSpring({
    from: { opacity: 0 },
    to: { opacity: InView ? 1 : 0 },
    config: { duration: 300 },
    delay: 300,
  });

  const animationDescription = useSpring({
    from: { opacity: 0 },
    to: { opacity: InView ? 1 : 0 },
    config: { duration: 300 },
    delay: 350,
  });

  return (
    <div className="container py-[50px] sm:py-[100px]">
      <div className="mb-10 grid gap-2 text-left text-white duration-[1000ms] sm:gap-4 md:mb-20 md:gap-10 lg:grid-cols-2">
        <animated.p style={animationTitle} className="text-[30px] leading-none md:text-[50px]">
          {t("TITLE_1") as ReactNode} <span className="text-[#bfa37c]">{t("TITLE_2")}</span> {t("TITLE_3") as ReactNode}
        </animated.p>
        <animated.div style={animationDescription} className="space-y-4 text-[18px]">
          <p className="text-[#a6a6a6] md:text-[20px]">{t("SUBTITLE")}</p>
          <div className="space-y-2">
            <a className="flex items-center space-x-2 text-[#bfa37c]" target="_blank" href={`tel:${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>
                {t("HOTLINE")}: {contacts.mainPhone}
              </span>
            </a>
            <a
              className="flex items-center space-x-2 text-[#bfa37c]"
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`}
            >
              <FaWhatsapp />
              <span>WhatsApp: +955 591 81 99 46</span>
            </a>
            <a className="flex items-center space-x-2 text-[#bfa37c]" target="_blank" href={`https://t.me/${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`}>
              <FaTelegramPlane />
              <span>Telegram: +955 591 81 99 46</span>
            </a>
          </div>
        </animated.div>
      </div>
      <div className="aos:opacity-0 grid gap-5 gap-y-10 duration-300 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map(({ number, title, images, description, prices }, index) => {
          const startIndx = index + 1;
          const delay = startIndx * 200;
          return <AnimatedListItem t={t} tCommon={tCommon} prices={prices} images={images} number={number} key={index} description={description} title={title} delay={delay} />;
        })}
      </div>
    </div>
  );
};

export default CarsHome;
