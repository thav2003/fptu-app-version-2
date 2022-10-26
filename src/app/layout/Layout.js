import React from "react";
import { isMobile } from "react-device-detect";
import Footer from "./footer/footer";
import MobilbeHeader from "./header/MobileHeader";
import DesktopHeader from "./header/DesktopHeader";
const MyLayout = ({ children, hideFooter, hideHeader, className }) => {
  return (
    <>
      {isMobile ? <MobilbeHeader /> : <DesktopHeader />}
      <main className={`bg-[#fff] min-h-[100vh] ${className}`}>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default MyLayout;
