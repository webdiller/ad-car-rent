import Footer from "../Footer";
import HeaderHome from "../Header/HeaderHome";

const HomeLayout = ({ children }: any) => {
  return (
    <>
      <HeaderHome />
      {children}
      <Footer />
    </>
  );
};

export { HomeLayout };
