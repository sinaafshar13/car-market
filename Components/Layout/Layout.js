import Footer from "../Templates/Footer/Footer";
import Header from "../Templates/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );  
};

export default Layout;
