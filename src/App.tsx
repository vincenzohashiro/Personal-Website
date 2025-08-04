import NavBar from "./components/NavBar";
import BasicCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/6.jpeg";
import "./css/App.css";
import MatrixBackground from "./components/Background";

function App() {
  return (
    <div className="Background-Container">
      <MatrixBackground />
      <div className="page-container">
        <NavBar brandName="Jabolmaster" imageSrcPath={imagePath} />
        <div className="content-wrap">
          <BasicCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
