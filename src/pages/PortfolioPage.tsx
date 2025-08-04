import NavBar from "../components/NavBar";
import BasicCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import imagePath from "../assets/6.jpeg";
import MatrixBackground from "../components/Background";

export default function PortfolioPage() {
  return (
    <>
      {/* ✅ Background */}
      <MatrixBackground />

      <div className="Background-Container">
        <div className="page-container">
          <NavBar brandName="Jabolmaster" imageSrcPath={imagePath} />
          <div className="content-wrap">
            <BasicCard />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
