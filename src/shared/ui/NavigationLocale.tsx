import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import flagRU from "@/public/images/flag-ru.svg";
import flagEN from "@/public/images/flag-gb.svg";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface ComponentProps {
  classNames?: string;
}

const NavigationLocale = ({ classNames }: ComponentProps) => {
  const router = useRouter();
  const { locales, locale, asPath } = router;
  const [currentLang, currentLangSet] = useState<"Язык" | "Language">("Язык");

  const onLanguageChange = (localeArgs: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(asPath, undefined, { locale: localeArgs });
  };

  useEffect(() => {
    if (locale === "ru") currentLangSet("Language");
    if (locale === "en") currentLangSet("Язык");
  }, [router]);

  if (!locales || locales.length === 0) return null;

  return (
    <div className={clsx("space-x-2", classNames)}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {currentLang}
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="space-y-1 px-1 py-1">
              {locales.map((localeItem) => {
                const matchImg = localeItem === "ru" ? flagRU : flagEN;
                const matchLocate = localeItem === locale;

                return (
                  <Menu.Item key={localeItem}>
                    {({ active }) => (
                      <button
                        onClick={onLanguageChange(localeItem)}
                        className={clsx("group inline-flex w-full items-center space-x-2 rounded-md px-2 py-2 text-sm transition duration-300", {
                          "bg-[#bfa37c]/70 text-white": active || matchLocate,
                          "text-gray-900": !active,
                        })}
                      >
                        {localeItem === "ru" ? (
                          <>
                            <img className="w-6 overflow-hidden rounded-sm" src={matchImg.src} alt="" /> <span>Русский</span>
                          </>
                        ) : (
                          <>
                            <img className="w-6 overflow-hidden rounded-sm" src={matchImg.src} alt="" /> <span>English</span>
                          </>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NavigationLocale;
