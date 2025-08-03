import NavBar from "./components/NavBar";
import BasicCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/6.jpeg";
import "./css/App.css";

function App() {
  return (
    <div className="app-background">
      <NavBar brandName="Jabolmaster" imageSrcPath={imagePath} />
      <BasicCard />
    </div>
  );
}

export default App;
