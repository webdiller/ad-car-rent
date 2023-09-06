import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "react-photo-view/dist/react-photo-view.css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";
import "@/styles/globals.css";

const noirPro = localFont({
  src: [
    {
      path: "../../public/fonts/NoirPro/NoirPro-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/NoirPro/NoirPro-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-noir-pro",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${noirPro.style.fontFamily};
          font-weight: 300;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
        }
      `}</style>
      <Component {...pageProps} />
      <Script defer src="https://unpkg.com/taos@1.0.5/dist/taos.js" />
    </>
  );
};

export default App
