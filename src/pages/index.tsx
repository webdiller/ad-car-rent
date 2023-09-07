import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import HomePage from "@/pages-flat/HomePage";
import { HomeLayout } from "@/widgets/Layouts/HomeLayout";
import getT from "next-translate/getT";
import { GetStaticProps } from "next";
import { MetaProps } from "@/shared/types/meta";

interface PageProps {
  meta: MetaProps;
}

const Page: NextPageWithLayout<PageProps> = ({ meta }) => {
  return <HomePage meta={meta} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const t = await getT(locale, "meta");
  const meta: MetaProps = t("homePage", undefined, { returnObjects: true });

  return {
    props: { meta },
    revalidate: 10
  };
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Page;
