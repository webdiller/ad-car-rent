"use client";
import { CarProps } from "@/shared/types";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { FC, useState, Fragment } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useSpring, animated } from "react-spring";
import useTranslation from "next-translate/useTranslation";
import { removePlusAndSpaces } from "@/shared/helpers/removePlusAndSpaces";
import { contacts } from "@/shared/contacts";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
interface ComponentProps {
  car: CarProps;
  currentLocale: "ru" | "en";
}

const CarDetails: FC<ComponentProps> = ({ car, currentLocale }) => {
  const { t } = useTranslation("carDetails");
  const { t: tCars } = useTranslation("carsHome");
  const { t: tCommon } = useTranslation("common");

  const mainImageUrl = car.images[0];
  let [isOpenRus, setIsOpenRus] = useState(false);
  let [isOpenEng, setIsOpenEng] = useState(false);

  const mainImageAltText = currentLocale === "ru" ? `Главное изображение ${car.title}` : `Main image of ${car.title}`;
  const additionImageAltText = currentLocale === "ru" ? `Изображение ${car.title}` : `Addition image of ${car.title}`;

  function togleModalRus() {
    setIsOpenRus((prev) => !prev);
  }

  function togleModalEng() {
    setIsOpenEng((prev) => !prev);
  }

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

  const animationButton2 = useSpring({
    from: { opacity: 0, display: "flex", flexDirection: "column" as "column" },
    to: { opacity: 1 },
    config: { duration: 300 },
    delay: 650,
  });

  return (
    <>
      <PhotoProvider>
        <div className="container flex flex-col gap-6 py-[30px] sm:py-[50px] md:flex-row-reverse md:gap-10">
          {/* CONTENT */}
          <div className="space-y-3 py-5 md:flex-1">
            {/* ITEM */}
            <animated.div style={animationTitle}>
              <p className="text-[20px]">
                <span className="text-[30px] font-normal">{car.title} </span>
                {tCars(car.description)}
              </p>
            </animated.div>

            {/* TODO: Add features */}
            {/* <animated.div style={animationTags} className="flex flex-wrap gap-2">
              <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">4 Persons </button>
              <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">Automatic </button>
              <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">Black Lether </button>
              <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">InteriorLux </button>
              <button className="inline-flex items-center justify-center rounded-md border-[1px] border-[#bfa37c] px-4 py-2 text-lg text-[#black]">Wi-Fi </button>
            </animated.div> */}

            {/* ITEM */}
            <animated.div className="!my-10" style={animationPrices}>
              <p className="text-[22px] font-normal">{t("TITLE_PRICES")}</p>
              <div className="space-y-1">
                <p className="text-[16px]">
                  <span className="mr-2 text-[20px] font-medium">{t("ITEM_TITLE_PRICE_PER_ONE_DAY")}:</span>
                  <span className="mr-[1px] text-[24px] text-[#bfa37c]">{car.prices.perOneDay.price}</span>
                  <span className="text-[20px] font-normal leading-none text-[#bfa37c]">{tCommon("CURRENCY_DOLLAR")}</span>
                </p>
                <p className="text-[16px]">
                  <span className="mr-2 text-[20px] font-medium">{t("ITEM_TITLE_PRICE_PER_TEN_DAY")}:</span>
                  <span className="mr-[1px] text-[24px] text-[#bfa37c]">{car.prices.perTenDays.price}</span>
                  <span className="text-[20px] font-normal leading-none text-[#bfa37c]">{tCommon("CURRENCY_DOLLAR")}</span>
                </p>
                {/* <p className="text-[16px]">
                  <span className="mr-[1px] text-[24px] text-[#bfa37c]">1.000</span>
                  <span className="text-[20px] text-[#bfa37c]">{tCommon("CURRENCY_DOLLAR")}</span>/ {tCommon("HOUR")}
                </p>
                <p className="text-[16px]">
                  <span className="mr-[1px] text-[24px] text-[#bfa37c]">10.000</span>
                  <span className="text-[20px] text-[#bfa37c]">{tCommon("CURRENCY_DOLLAR")}</span>/ {tCommon("DAY")}
                </p>
                <p className="text-[16px]">
                  <span className="mr-[1px] text-[24px] text-[#bfa37c]">100.000</span>
                  <span className="text-[20px] text-[#bfa37c]">{tCommon("CURRENCY_DOLLAR")}</span>/ {tCommon("MONTH")}
                </p> */}
              </div>
            </animated.div>

            <animated.div className="!my-10" style={animationButton}>
              <div className="space-y-2">
                <a className="flex items-center space-x-2 text-[black]" target="_blank" href={`tel:${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>{contacts.mainPhone}</span>
                </a>
                <a
                  className="flex items-center space-x-2 text-[black]"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`}
                >
                  <FaWhatsapp />
                  <span>WhatsApp: +955 591 81 99 46</span>
                </a>
                <a className="flex items-center space-x-2 text-[black]" target="_blank" href={`https://t.me/${removePlusAndSpaces({ inputString: contacts.mainPhone, removeSpace: true })}`}>
                  <FaTelegramPlane />
                  <span>Telegram: +955 591 81 99 46</span>
                </a>
              </div>
              {/* <Link href="/catalog" className="inline-flex items-center justify-center border-[1px] border-[#bfa37c] bg-[#bfa37c]/10 px-4 py-2 text-lg text-black">
                {t("ORDER")} {car.title}
              </Link> */}
            </animated.div>

            <animated.div style={animationButton2}>
              <button onClick={togleModalRus} className="text-left text-lg text-black underline underline-offset-2 transition-all hover:no-underline">
                {t("BUTTON_RULES_RUSSIAN")}
              </button>
              <button onClick={togleModalEng} className="text-left text-lg text-black underline underline-offset-2 transition-all hover:no-underline">
                {t("BUTTON_RULES_ENGLISH")}
              </button>
              <a target="_blank" download href={`/docs/doc-rent-${currentLocale}.docx`} className="text-left text-lg text-black underline underline-offset-2 transition-all hover:no-underline">
                {t("BUTTON_RULES_DOCUMENT_RENT")}
              </a>
              <a target="_blank" download href="/docs/doc-operating-rules.docx" className="text-left text-lg text-black underline underline-offset-2 transition-all hover:no-underline">
                {t("BUTTON_RULES_DOCUMENT_OPERATING")}
              </a>
            </animated.div>
          </div>

          {/* MEDIA */}
          <animated.div style={animationImages} className="md:min-w-[55%] md:self-start">
            <div className="relative mb-2 cursor-pointer overflow-hidden pb-[100%]">
              <PhotoView src={`/images/cars/${mainImageUrl}`}>
                <Image
                  quality={50}
                  fill
                  onLoadingComplete={(img) => img.classList.remove("animate-pulse")}
                  className="absolute inset-0 h-full w-full object-cover object-bottom"
                  src={`/images/cars/${mainImageUrl}`}
                  alt={mainImageAltText}
                />
              </PhotoView>
            </div>

            {car.images.length <= 1 ? null : (
              <div className="grid gap-2 sm:grid-cols-2">
                {car.images.slice(1).map((url, indx) => {
                  return (
                    <div key={indx} className="relative cursor-pointer overflow-hidden pb-[100%]">
                      <PhotoView src={`/images/cars/${url}`}>
                        <Image
                          quality={50}
                          fill
                          onLoadingComplete={(img) => img.classList.remove("animate-pulse")}
                          className="absolute inset-0 z-10 h-full w-full object-cover object-bottom"
                          src={`/images/cars/${url}`}
                          alt={additionImageAltText}
                        />
                      </PhotoView>
                    </div>
                  );
                })}
              </div>
            )}
          </animated.div>
        </div>
      </PhotoProvider>

      {/* RUSSIAN */}
      <Transition appear show={isOpenRus} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={togleModalRus}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl font-medium leading-tight text-gray-900">
                    Правила пользования автомобилем <span className="font-bold">{car.title}</span>
                  </Dialog.Title>
                  <ul className="mt-2 list-inside list-decimal space-y-1 text-gray-700 sm:text-lg">
                    <li>Нельзя превышать скоростной режим.</li>
                    <li>
                      После переключения автоматической коробки передач с положения P на D, R и N , а так же наоборот, необходимо переждать 1 секунду и продолжить движение. ( бережное отношение к
                      коробке передач ) .
                    </li>
                    <li>Курить в автомобиле запрещено.</li>
                    <li>Нельзя устраивать состязание кто быстрее на арендованном автомобиле с другими автомобилями, мотоциклами и другими транспортными средствами.</li>
                    <li>
                      Если вышла не исправность в автомобиле , позвоните или напишите арендадателю и объясните поломку. Самому категорически запрещено вмешиваться в технический процесс ( ремонт ) в
                      автомобиле.
                    </li>
                    <li>Собак, Кошек и других животных с когтями, без сумки-перевозки перевозить категорически нельзя.</li>
                    <li>Если закончилось топливо - вызовите нашего специалиста. Заправлять только 95 топливом.</li>
                    <li>Объезжать ямы и препятствия.</li>
                    <li>Парковать автомобиль в соответствии с законом - на парковочных местах.</li>
                    <li>Наркотические средства в соответствии с действующим законом перевозить на арендованном автомобиле строго запрещено.</li>
                    <li>
                      Должна быть бережная эксплуатация автомобилем: не ломать кнопки, ручки, не стучать по мониторам, не рвать покрытие сидений, панелей, бордочков. Коврики не использовать на улице в
                      своих целях.
                    </li>
                    <li>Не забывать свои вещи во время сдачи автомобиля.</li>
                  </ul>

                  <div className="my-4">
                    <p>Данные правила позволяют держать автомобили в хорошем, рабочем состоянии и радовать наших дорогих и уважаемых клиентов.</p>
                    <p>Мы уважаем и ценим каждого нашего клиента и просим взаимного отношения от вас.</p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#bfa37c]/50 px-4 py-2 font-medium text-black transition duration-300 hover:bg-[#bfa37c]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bfa37c] focus-visible:ring-offset-2"
                      onClick={togleModalRus}
                    >
                      Согласен
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* ENGLISH */}
      <Transition appear show={isOpenEng} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={togleModalEng}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl font-medium leading-tight text-gray-900">
                    <span className="font-bold">{car.title}</span> Car Usage Rule
                  </Dialog.Title>
                  <ul className="mt-2 list-inside list-decimal space-y-1 text-gray-700 sm:text-lg">
                    <li>Do not exceed the speed limit.</li>
                    <li>After shifting the automatic transmission from the P position to D, R, and N, or vice versa, wait for 1 second before continuing to move (handle the gearbox with care).</li>
                    <li>Smoking in the car is prohibited.</li>
                    <li>Competing with other vehicles, motorcycles, and other means of transportation using the rented car is strictly forbidden.</li>
                    <li>
                      If there is a malfunction in the car, call or message the lessor and explain the issue. It is strictly prohibited to interfere with the technical process (repair) of the car
                      yourself.
                    </li>
                    <li>Transporting dogs, cats, and other clawed animals without a carrier bag is strictly prohibited.</li>
                    <li>If you run out of fuel, contact our specialist. Use only 95 fuel.</li>
                    <li>Avoid potholes and obstacles.</li>
                    <li>Park the car in accordance with the law - in designated parking spaces.</li>
                    <li>Transporting narcotics in a rented car is strictly prohibited in accordance with the current law.</li>
                    <li>
                      The car must be handled with care: do not break buttons, handles, do not hit the monitors, do not tear seat coverings, panels, or moldings. Do not use floor mats for outdoor
                      purposes.
                    </li>
                    <li>Do not forget your belongings when returning the car.</li>
                  </ul>

                  <div className="my-4">
                    <p>These rules allow us to keep the cars in good working condition and delight our dear and respected customers.</p>
                    <p>We respect and value each of our customers and request mutual respect from you.</p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#bfa37c]/50 px-4 py-2 font-medium text-black transition duration-300 hover:bg-[#bfa37c]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bfa37c] focus-visible:ring-offset-2"
                      onClick={togleModalEng}
                    >
                      Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
