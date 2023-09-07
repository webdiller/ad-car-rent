import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import CatalogPage from "@/pages-flat/CatalogPage";
import { DefaultLayout } from "@/widgets/Layouts/DefaultLayout";
import { GetStaticProps } from "next";
import { MetaProps } from "@/shared/types/meta";
import getT from "next-translate/getT";

interface PageProps {
  meta: MetaProps;
}

const Page: NextPageWithLayout<PageProps> = ({ meta }) => {
  return <CatalogPage meta={meta} />;
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const t = await getT(locale, "meta");
  const meta: MetaProps = t("catalogPage", undefined, { returnObjects: true });

  return {
    props: { meta },
    revalidate: 10,
  };
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
