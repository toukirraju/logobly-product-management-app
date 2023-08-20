import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Sidebar />

      <div className=" sm:ml-64  h-screen overflow-hidden">
        <Navigation />

        {/* main section start */}
        <div className=" h-[calc(100vh-110px)] overflow-y-auto">{children}</div>
        {/* main section end */}

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
