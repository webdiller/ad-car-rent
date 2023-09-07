import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { cars } from "@/shared/cars";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { CarProps } from "@/shared/types";
import CarDetails from "@/widgets/CarDetails";
import { DefaultLayout } from "@/widgets/Layouts/DefaultLayout";
import getT from "next-translate/getT";
import { MetaProps } from "@/shared/types/meta";
import { NextSeo } from "next-seo";

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
    const mathLocale = defaultLocale === locale;
    for (let index = 0; index < cars.length; index++) {
      const car = cars[index];
      const path: PagePath = {
        params: { number: `${car.number}` },
        locale,
      };
      if (mathLocale) delete path.locale;
      paths.push(path);
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, locales, params, defaultLocale }) => {
  const { number } = params as GetStaticPropsParams;
  const matchCar = cars.find((car) => car.number === parseInt(number));

  if (!matchCar) {
    return {
      notFound: true,
    };
  }

  const t = await getT(locale, "meta");
  const metaTitle = t("carPage.title", { carName: matchCar?.title });
  const metaDescription = t("carPage.description", { carName: matchCar?.title });

  return {
    props: {
      currentLocale: locale,
      car: matchCar,
      meta: {
        title: metaTitle,
        description: metaDescription,
      },
    },
  };
};
interface PageProps {
  car: CarProps;
  currentLocale: "ru" | "en";
  meta: MetaProps;
}

const Page: NextPageWithLayout<PageProps> = ({ car, currentLocale, meta }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <CarDetails car={car} currentLocale={currentLocale} />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
