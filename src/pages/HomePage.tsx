import StartButton from "../components/StartButton";
import MatrixBackground from "../components/Background";

export default function HomePage() {
  return (
    <div className="Background-Container">
      <MatrixBackground />
      <div className="page-container">
        <StartButton />
      </div>
    </div>
  );
}
