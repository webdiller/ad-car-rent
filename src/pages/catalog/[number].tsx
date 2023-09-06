import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { cars } from "@/shared/cars";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { CarProps } from "@/shared/types";
import CarDetails from "@/widgets/CarDetails";
import { DefaultLayout } from "@/widgets/Layouts/DefaultLayout";

interface PagePath {
  params: {
    number: string;
  };
  locale?: string;
}

interface GetStaticPropsParams extends ParsedUrlQuery {
  number: string;
}

export const getStaticPaths: GetStaticPaths = ({ defaultLocale, locales }) => {
  const paths: PagePath[] = [];
  for (const locale of locales as string[]) {
    const mathLocale = defaultLocale === locale
    for (let index = 0; index < cars.length; index++) {
      const car = cars[index]
      const path: PagePath = {
        params: {number: `${car.number}`},
        locale
      }
      if (mathLocale) delete path.locale
      paths.push(path)
    }
  }
  
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ locale, locales, params, defaultLocale }) => {
  const { number } = params as GetStaticPropsParams;

  const matchCar = cars.find((car) => car.number === parseInt(number));
  return {
    props: {
      currentLocale: locale,
      car: matchCar,
    },
  };
};
interface PageProps {
  car: CarProps;
  currentLocale: "ru" | "en"
}

const Page: NextPageWithLayout<PageProps> = ({ car, currentLocale }) => {
  return <CarDetails car={car} currentLocale={currentLocale}/>
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
