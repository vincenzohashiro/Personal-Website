import NavBar from "./components/NavBar";
import BasicCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/6.jpeg";
import "./css/App.css";
import MatrixBackground from "./components/Background";
import StartButton from "./components/StartButton";

function App() {
  return (
    <div className="Background-Container">
      <MatrixBackground />
      <div className="page-container">
        {/* Start button will reveal cards instead */}
        <StartButton />
        <NavBar brandName="Jabolmaster" imageSrcPath={imagePath} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
