import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../UI";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: " 0px 30px",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
