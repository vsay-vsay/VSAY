import React from "react";
import Footer from "../components/atom/footer";
import Header from "../components/atom/Header";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
