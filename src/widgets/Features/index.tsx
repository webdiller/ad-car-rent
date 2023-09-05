import clsx from "clsx";
import React, { FC } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface ComponentProps {}

const Features: FC<ComponentProps> = () => {
  const [rootRef, rootRefInView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the element enters the viewport.
  });
  const animationTitle = useSpring({
    from: { opacity: rootRefInView ? 0 : 1 },
    to: { opacity: rootRefInView ? 1 : 0 },
    config: { duration: 300 },
    delay: 100,
  });
  const animationSubtitle = useSpring({
    from: { opacity: rootRefInView ? 0 : 1 },
    to: { opacity: rootRefInView ? 1 : 0 },
    config: { duration: 300 },
    delay: 300,
  });

  const featuresData = [
    { title: "Эксклюзивный выбор автомобилей", description: "Наши автомобили представляют самые престижные марки, чтобы вы всегда чувствовали себя особенным." },

    { title: "Превосходное качество обслуживания", description: "Мы гарантируем беспрецедентный сервис и заботу о вашем комфорте на каждом этапе путешествия." },
    {
      title: "Гибкая система аренды",
      description: "Наши условия проката адаптированы под ваши потребности, обеспечивая максимальное удобство.",
    },

    { title: "Прозрачная ценовая политика", description: "Без скрытых платежей: у нас вы всегда знаете, сколько стоит ваше уникальное автомобильное приключение." },

    { title: "Безопасность на дороге", description: "Наши автомобили проходят регулярное обслуживание, гарантируя вам безопасное и надежное путешествие." },

    { title: "Личный подход к каждому клиенту", description: "Мы заботимся о ваших пожеланиях, чтобы ваша поездка стала неповторимым искусством." },
  ];
  return (
    <div className="container py-[50px] sm:py-[100px]">
      <div ref={rootRef} className="mb-10 border-b-[1px] border-white/10 pb-4 text-left text-white">
        <animated.p style={animationTitle} className="text-[30px] md:text-[50px]">
          Наши Основные Преимущества
        </animated.p>
        <animated.p style={animationSubtitle} className="text-[#a6a6a6] md:text-[20px]">
          Лидерство в Элитном Прокате Автомобилей
        </animated.p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {featuresData.map(({ title, description }, indx) => {
          return (
            <div key={title} className={`space-y-2 text-white`}>
              <p className="text-lg sm:text-2xl">{title}</p>
              <p className="text-[#a6a6a6] sm:text-[18px]">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
