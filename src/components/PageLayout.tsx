import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MatrixBackground from "./Background";
import imagePath from "../assets/skull.png";
import "../css/SubPage.css";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="Background-Container">
      <MatrixBackground />
      <div className="page-container fade-in">
        <NavBar brandName="Jabolmaster" imageSrcPath={imagePath} />
        <main className="content-wrap sub-page">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
