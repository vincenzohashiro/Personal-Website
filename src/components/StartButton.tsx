import React, { useState, useEffect } from "react";
import "../css/StartButton.css";
import { useNavigate } from "react-router-dom";

export default function StartButton() {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio";
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing forward
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (!isDeleting && index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else if (isDeleting) {
        clearInterval(interval);
      }
    }, 2000 / fullText.length);

    return () => clearInterval(interval);
  }, [isDeleting]);

  const handleStart = () => {
    setIsDeleting(true);
    let index = fullText.length;

    const deleteInterval = setInterval(() => {
      if (index >= 0) {
        setText(fullText.slice(0, index));
        index--;
      } else {
        clearInterval(deleteInterval);

        // Small delay before navigating
        setTimeout(() => {
          navigate("/portfolio", { state: { fadeIn: true } });
        }, 200);
      }
    }, 40);
  };

  return (
    <div className={`start-container`}>
      <div className="intro">
        <h1 className="intro-title">{text}</h1>
        {!isDeleting && (
          <button className="start-btn" onClick={handleStart}>
            Start
          </button>
        )}
      </div>
    </div>
  );
}
