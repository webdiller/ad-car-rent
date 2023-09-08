"use client";
import NavigationContacts from "@/shared/ui/NavigationContacts";
import NavigationLocale from "@/shared/ui/NavigationLocale";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { FC } from "react";
import { useSpring, animated } from "react-spring";

interface ComponentProps {}

const HeaderBakground: FC<ComponentProps> = () => {
  const { t } = useTranslation("header");

  return (
    <>
      <header className="bg-zinc-900 text-white">
        <div className="container flex items-center justify-between py-4">
          <animated.div
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 300 },
              delay: 50,
            })}
          >
            <Link className="whitespace-nowrap italic tracking-wider sm:text-xl" href="/">
              A.D. Car Rent
            </Link>
          </animated.div>
          <animated.div
            className="grid max-w-[120px] grid-cols-2 gap-2 sm:max-w-none"
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 300 },
              delay: 100,
            })}
          >
            <NavigationContacts />
            <NavigationLocale />
          </animated.div>
        </div>

        <div className="border-b-[1px] border-[#bfa37c]/20"></div>

        <nav className="container flex items-center space-x-4 bg-transparent py-2">
          <animated.div
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 300 },
              delay: 50,
            })}
          >
            <Link href="/">{t("HOME")}</Link>
          </animated.div>
          <animated.div
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 300 },
              delay: 150,
            })}
          >
            <Link href="/catalog">{t("CARS")}</Link>
          </animated.div>
          <animated.div
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 300 },
              delay: 250,
            })}
          >
            <Link href="/about">{t("ABOUT")}</Link>
          </animated.div>
        </nav>
      </header>
    </>
  );
};

export default HeaderBakground;
