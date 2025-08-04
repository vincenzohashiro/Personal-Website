import React, { useState, useEffect } from "react";
import "../css/StartButton.css";

export default function StartButton() {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index)); // ✅ prevents skipped letters
        index++;
      } else {
        clearInterval(interval);
      }
    }, 8000 / fullText.length); // 8s total typing time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="start-container">
      <div className="intro">
        <h1 className="intro-title">{text}</h1>
        <button className="start-btn">Start</button>
      </div>
    </div>
  );
}
