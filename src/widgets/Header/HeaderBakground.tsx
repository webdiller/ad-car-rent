"use client";
import NavigationLocale from "@/shared/ui/NavigationLocale";
import Link from "next/link";
import React, { FC } from "react";
import { useSpring, animated } from "react-spring";

interface ComponentProps {}

const HeaderBakground: FC<ComponentProps> = () => {
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
            <Link className="italic tracking-wider sm:text-xl" href="/">
              A.D. Car Rent
            </Link>
          </animated.div>
          <div className="grid">
            <animated.div
              style={useSpring({
                from: { opacity: 0 },
                to: { opacity: 1 },
                config: { duration: 300 },
                delay: 100,
              })}
            >
              <NavigationLocale />
            </animated.div>
          </div>
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
            <Link href="/">Главная</Link>
          </animated.div>
          <animated.div
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 300 },
              delay: 150,
            })}
          >
            <Link href="/catalog">Автомобили</Link>
          </animated.div>
          <animated.div
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 300 },
              delay: 250,
            })}
          >
            <Link href="/about">О нас</Link>
          </animated.div>
        </nav>
      </header>
    </>
  );
};

export default HeaderBakground;
