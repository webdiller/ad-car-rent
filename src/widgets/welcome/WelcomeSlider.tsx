"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import bgImage from "@/public/images/lexus-hs-front-side.jpg";
import bgImage2 from "@/public/images/welcome-bg.jpg";
import bgImage3 from "@/public/images/lexus_hs_2009.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { clsx } from "clsx";
import useTranslation from "next-translate/useTranslation";
interface ComponentProps {}

interface SlideInterface {
  title: string;
  description: string;
  button: string;
  image: string;
}

const WelcomeSlider: FC<ComponentProps> = () => {
  const [swiperActiveIndex, swiperActiveIndexSet] = useState(0);
  SwiperCore.use([Autoplay]);
    const { t } = useTranslation("welcome");
    const slidesData: SlideInterface[] = [
        { title: "SLIDES.0.TITLE", description: "SLIDES.0.DESCRIPTION", button: "SLIDES.0.BUTTON", image: bgImage.src },
        { title: "SLIDES.1.TITLE", description: "SLIDES.1.DESCRIPTION", button: "SLIDES.1.BUTTON", image: bgImage2.src },
        { title: "SLIDES.2.TITLE", description: "SLIDES.2.DESCRIPTION", button: "SLIDES.2.BUTTON", image: bgImage3.src },
    ];

  return (
    <div className="relative h-[calc(100vh)] text-white">
      <Swiper
        modules={[EffectFade]}
        className="h-full"
        slidesPerView={1}
        loop={true}
        speed={4000}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        onSlideChange={(e) => swiperActiveIndexSet(e.realIndex)}
      >
        {slidesData.map((item, index) => {
          const match = index === swiperActiveIndex;

          return (
            <SwiperSlide className="overflow-hidden" key={index}>
              <div className="absolute inset-0 h-full w-full">
                <img
                  className={clsx("h-full w-full object-cover transition-all duration-1000", {
                    "scale-110": !match,
                    "scale-100": match,
                  })}
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black/50 text-white">
                <div
                  className={clsx("flex max-w-[900px] flex-col items-center space-y-4 rounded-lg p-6 text-center transition duration-300", {
                    "bg-black/0 md:backdrop-blur-0": !match,
                    "bg-black/20 md:backdrop-blur-sm": match,
                  })}
                >
                  <p
                    className={clsx("text-2xl transition duration-300 sm:text-3xl md:text-6xl", {
                      "translate-y-[-5px] opacity-100": match,
                      "translate-y-0 opacity-0": !match,
                    })}
                  >
                    {t(item.title)}
                  </p>
                  <p
                    className={clsx("duration-400 text-xl text-[#a6a6a6] transition sm:text-2xl md:text-3xl", {
                      "translate-y-[-5px] opacity-100": match,
                      "translate-y-0 opacity-0": !match,
                    })}
                  >
                    {t(item.description)}
                  </p>
                  <Link
                    href="/catalog"
                    className={clsx("inline-flex items-center justify-center border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#f1e3ce] transition duration-500", {
                      "translate-y-[-5px] opacity-100": match,
                      "translate-y-0 opacity-0": !match,
                    })}
                  >
                    {t(item.button)}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WelcomeSlider;
