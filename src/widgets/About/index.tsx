import React from "react";
import { useSpring, animated } from "react-spring";

const AboutUs = () => {
  const useAnimateElement = (delay: number) => {
    return useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 300 },
      delay,
    });
  };

  return (
    <div className="container py-[50px] sm:py-[100px]">
      <div className="mb-10 border-b-[1px] border-white/10 pb-4 text-left text-white">
        <animated.p style={useAnimateElement(100)} className="text-[30px] md:text-[50px]">
          О нас
        </animated.p>
        <animated.p style={useAnimateElement(200)} className="text-[#a6a6a6] md:text-[20px]">
          Наша Миссия, История и Преимущества
        </animated.p>
      </div>

      <div className="mb-10 text-lg text-white sm:text-2xl">
        <animated.p style={useAnimateElement(300)}>Мы - ваш надежный партнер в сфере автомобильной аренды.</animated.p>
        <animated.p style={useAnimateElement(400)}>С момента нашего основания мы стремимся обеспечить наших клиентов удобством и свободой передвижения.</animated.p>
        <animated.p style={useAnimateElement(500)}>Наша компания занимается предоставлением широкого выбора автомобилей для любых потребностей и бюджетов.</animated.p>
      </div>

      <div className="space-y-4 text-lg text-white sm:text-2xl">
        <animated.p style={useAnimateElement(600)}>Выбирая нас, вы выбираете уверенность в качестве и надежности. Мы делаем ваше вождение комфортным и незабываемым.</animated.p>
        <animated.p style={useAnimateElement(900)} className="text-2xl text-[#bfa37c] md:text-3xl">
          Добро пожаловать в мир автомобильной свободы с нами!
        </animated.p>
      </div>
    </div>
  );
};

export default AboutUs;
