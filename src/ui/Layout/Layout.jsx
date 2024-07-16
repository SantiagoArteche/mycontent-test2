import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
