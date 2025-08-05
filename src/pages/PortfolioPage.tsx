import NavBar from "../components/NavBar";
import BasicCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import imagePath from "../assets/skull.png";
import MatrixBackground from "../components/Background";
import "../css/PortfolioPage.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const location = useLocation();
  const shouldFadeIn = location.state?.fadeIn;
  const [showContent, setShowContent] = useState(!shouldFadeIn);

  useEffect(() => {
    if (shouldFadeIn) {
      setTimeout(() => setShowContent(true), 200);
    }
  }, [shouldFadeIn]);

  return (
    <div className="Background-Container">
      <MatrixBackground />
      <div className={`page-container ${shouldFadeIn ? "fade-in" : ""}`}>
        <NavBar brandName="Jabolmaster" imageSrcPath={imagePath} />
        {showContent && (
          <div className="content-wrap matrix-reveal">
            <BasicCard />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
