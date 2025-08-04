import "../css/ProfileCard.css";
import profileImage from "../assets/qq.png";
import React, { useState, useEffect } from "react";

export default function BasicCard() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [fadeClass, setFadeClass] = useState("fade-in");

  const tabs = {
    Profile: {
      title: "Profile Tab",
      content: (
        <>
          <p>
            This is the detailed content for the <b>Profile</b> tab.
          </p>
        </>
      ),
      buttonText: "Explore Profile",
    },
    Education: {
      title: "Education Tab",
      content: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
          className="education-container"
        >
          {/* Left Column */}
          <div className="education-column">
            <p>
              <strong>Certifications and Educational Attainment</strong>
            </p>
            <ul>
              <li>High School Diploma</li>
              <li>Senior Highschool Diploma (ICT STRAND)</li>
              <li>Completed Coursework in Information Technology</li>
              <li>Web and App Development Undergrad</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="education-column text-center">
            <p>
              <strong>Attended Schools and Universities</strong>
            </p>
            <ul>
              <li>Blessed School of Salitran</li>
              <li>STI College</li>
              <li>National University Dasmarinas</li>
            </ul>
          </div>
        </div>
      ),
      buttonText: "Explore Skills",
    },

    Skills: {
      title: "Skill Tab",
      content: (
        <>
          <p>
            This is the detailed content for the <b>Skills</b> tab. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quidem quos accusantium
            magni quis. Explicabo quisquam et a magni, provident laboriosam
            autem vero consequuntur illum excepturi repellendus beatae minus
            nihil harum.
          </p>
          <img
            src="https://via.placeholder.com/150"
            alt="Skills Example"
            style={{
              borderRadius: "8px",
              marginTop: "10px",
              paddingBottom: "30px",
            }}
          />
        </>
      ),
      buttonText: "Explore Skills",
    },
  };

  const currentTab = tabs[activeTab as keyof typeof tabs];

  useEffect(() => {
    setFadeClass("fade-out");
    const timer = setTimeout(() => setFadeClass("fade-in"), 150);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="container mt-5">
      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h2 className="profile-name">Jabol Master</h2>
        <p className="profile-title">Frontend Developer</p>
        <p className="profile-description">
          I am committed to providing my expertise and knowledge, continuously
          studying and staying upto-date with the latest advancements in my
          field to ensure that all work is performed at the highest standard
        </p>
        <button className="profile-button">View Profile</button>
      </div>
      <div className="card text-center profile-card">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills flex-sm-row flex-column justify-content-center align-items-center">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "Profile" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Profile")}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "Education" ? "active" : ""
                }`}
                onClick={() => setActiveTab("Education")}
              >
                Education
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "Skills" ? "active" : ""}`}
                onClick={() => setActiveTab("Skills")}
              >
                Skills
              </button>
            </li>
          </ul>
        </div>
        <div className={`card-body ${fadeClass}`}>
          <h5 className="card-title">{currentTab.title}</h5>
          <div className="card-text">{currentTab.content}</div>
          <a href="#" className="tab-button" style={{ marginTop: "50px" }}>
            {currentTab.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
