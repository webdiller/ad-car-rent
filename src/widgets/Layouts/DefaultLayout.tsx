import Footer from "../Footer";
import HeaderBakground from "../Header/HeaderBakground";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <HeaderBakground />
      {children}
      <Footer />
    </>
  );
};

export { DefaultLayout };
