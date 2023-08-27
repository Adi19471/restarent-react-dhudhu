import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "8vh" }}>
      <Header />
      <div style={{ flexGrow: 1, padding: "0px 0" }}>
      
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
