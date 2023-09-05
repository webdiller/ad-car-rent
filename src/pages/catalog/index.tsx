import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import CatalogPage from "@/pages-flat/CatalogPage";
import { DefaultLayout } from "@/widgets/Layouts/DefaultLayout";

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return <CatalogPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
