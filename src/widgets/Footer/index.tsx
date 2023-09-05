"use client";

import Link from "next/link";
import React, { FC } from "react";

interface ComponentProps {}

const Footer: FC<ComponentProps> = () => {
  return (
    <footer className="mt-auto bg-zinc-900 text-white">
      <div className="border-b-[1px] border-[#bfa37c]/20"></div>
      <div className="container flex flex-col justify-between py-4 sm:flex-row sm:items-center">
        <Link className="italic tracking-wider sm:text-xl" href="/">
          A.D. Car Rent
        </Link>
        Копирайт © {new Date().getFullYear()} {process.env.SITE_NAME}. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
