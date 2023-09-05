import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import HomePage from "@/pages-flat/HomePage";
import { HomeLayout } from "@/widgets/Layouts/HomeLayout";

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return <HomePage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Page;
