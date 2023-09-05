import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { cars } from "@/shared/cars";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { CarProps } from "@/shared/types";
import CarDetails from "@/widgets/CarDetails";
import { DefaultLayout } from "@/widgets/Layouts/DefaultLayout";

interface GetStaticPropsParams extends ParsedUrlQuery {
  number: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = cars.map((car) => ({ params: { number: `${car.number}` } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const { number } = ctx.params as GetStaticPropsParams;

  const matchCar = cars.find((car) => car.number === parseInt(number));
  return {
    props: {
      car: matchCar,
    },
  };
};
interface PageProps {
  car: CarProps;
}

const Page: NextPageWithLayout<PageProps> = ({car}) => {
  return <CarDetails car={car} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
