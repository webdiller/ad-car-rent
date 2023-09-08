import clsx from "clsx";
import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import useTranslation from "next-translate/useTranslation";
import { contacts } from "../contacts";

import { removePlusAndSpaces } from "@/shared/helpers/removePlusAndSpaces";
import { FaPhone, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

interface ComponentProps {
  classNames?: string;
}

const NavigationContacts = ({ classNames }: ComponentProps) => {
  const { t: translateCommon } = useTranslation("common");

  const contactItems = [
    {
      label: translateCommon("PHONE"),
      value: `tel:${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`,
      icon: () => <FaPhone />,
    },
    {
      label: translateCommon("WHATS_APP"),
      value: `https://api.whatsapp.com/send?phone=${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`,
      icon: () => <FaWhatsapp />,
    },
    {
      label: translateCommon("TELEGRAM"),
      value: `https://t.me/${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`,
      icon: () => <FaTelegramPlane />,
    },
  ];

  return (
    <Menu as="div" className={clsx("relative inline-block text-left", classNames)}>
      <>
        <Menu.Button className="inline-flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span className="hidden sm:inline-block">{translateCommon("CONTACTS")}</span>
          <ChevronDownIcon className="-mr-1 ml-2 hidden h-5 w-5 text-violet-200 hover:text-violet-100 sm:inline-block" aria-hidden="true" />
          <span className="sm:hidden text-[16px]">
            <BiPhoneCall />
          </span>
        </Menu.Button>
      </>
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
            {contactItems.map((item) => {
              return (
                <Menu.Item as={"a"} target="_blank" href={item.value} key={item.label}>
                  {({ active }) => (
                    <span
                      className={clsx("group inline-flex w-full items-center space-x-2 rounded-md px-2 py-2 text-sm text-gray-900 transition duration-300 hover:bg-[#bfa37c]/70 hover:text-white", {
                        "bg-[#bfa37c]/70 text-white": active,
                      })}
                    >
                      <span>{item.icon()}</span>
                      <span>{item.label}</span>
                    </span>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavigationContacts;
