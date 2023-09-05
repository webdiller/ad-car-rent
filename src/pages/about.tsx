import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import AboutUsPage from "@/pages-flat/AboutUsPage";
import { DefaultLayout } from "@/widgets/Layouts/DefaultLayout";

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return <AboutUsPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
