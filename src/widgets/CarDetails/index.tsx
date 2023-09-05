"use client";
import { CarProps } from "@/shared/types";
import Link from "next/link";
import React, { FC } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useSpring, animated } from "react-spring";
interface ComponentProps {
  car: CarProps;
}

const CarDetails: FC<ComponentProps> = ({ car }) => {
  const mainImageUrl = car.images[0];

  const animationImages = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 50,
  });

  const animationTitle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 150,
  });

  const animationTags = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 250,
  });

  const animationPrices = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 350,
  });

  const animationDescription = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 450,
  });

  const animationButton = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 550,
  });

  return (
    <PhotoProvider>
      <div className="container flex flex-col gap-6 py-[30px] sm:py-[50px] md:flex-row-reverse md:gap-10">
        {/* CONTENT */}
        <div className="space-y-3 py-5 md:flex-1">
          <animated.h1 style={animationTitle} className="mb-2 text-[28px] font-normal">
            {car.title}
          </animated.h1>

          <animated.div style={animationTags} className="flex flex-wrap gap-2">
            <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">4 Persons </button>
            <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">Automatic </button>
            <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">Black Lether </button>
            <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">InteriorLux </button>
            <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">Wi-Fi </button>
          </animated.div>

          {/* ITEM */}
          <animated.div style={animationPrices}>
            <p className="text-[22px] font-normal">Цены:</p>
            <div className="space-y-1">
              <p className="text-[16px]">
                <span className="mr-[1px] text-[24px] text-[#bfa37c]">1.000</span>
                <span className="text-[20px] text-[#bfa37c]">₽</span>/ час
              </p>
              <p className="text-[16px]">
                <span className="mr-[1px] text-[24px] text-[#bfa37c]">10.000</span>
                <span className="text-[20px] text-[#bfa37c]">₽</span>/ сутки
              </p>
              <p className="text-[16px]">
                <span className="mr-[1px] text-[24px] text-[#bfa37c]">100.000</span>
                <span className="text-[20px] text-[#bfa37c]">₽</span>/ месяц
              </p>
            </div>
          </animated.div>

          {/* ITEM */}
          <animated.div style={animationDescription}>
            <p className="text-[20px]">
              <span className="text-[30px] font-normal">{car.title} </span>
              {car.description}
            </p>
          </animated.div>

          <animated.div style={animationButton}>
            <Link href="/catalog" className="inline-flex items-center justify-center border-[1px] border-[#bfa37c] bg-[#bfa37c]/10 px-4 py-2 text-lg text-black">
              Заказать {car.title}
            </Link>
          </animated.div>
        </div>

        {/* MEDIA */}
        <animated.div style={animationImages} className="md:flex-1 md:self-start">
          <div className="relative mb-5 cursor-pointer overflow-hidden pb-[56.25%]">
            <PhotoView src={`/images/cars/${mainImageUrl}`}>
              <img className="absolute inset-0 h-full w-full object-cover" src={`/images/cars/${mainImageUrl}`} alt="" />
            </PhotoView>
          </div>

          {car.images.length <= 1 ? null : (
            <div className="grid gap-2 sm:grid-cols-2">
              {car.images.map((url, indx) => {
                return (
                  <div key={indx} className="relative cursor-pointer overflow-hidden pb-[56.25%]">
                    <PhotoView src={`/images/cars/${url}`}>
                      <img className="absolute inset-0 h-full w-full object-cover" src={`/images/cars/${url}`} alt="" />
                    </PhotoView>
                  </div>
                );
              })}
            </div>
          )}
        </animated.div>
      </div>
    </PhotoProvider>
  );
};

export default CarDetails;
