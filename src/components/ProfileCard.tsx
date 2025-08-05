import "../css/ProfileCard.css";
import profileImage from "../assets/qq.png";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BasicCard() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [fadeClass, setFadeClass] = useState("fade-in");

  const [openWorkIndices, setOpenWorkIndices] = useState<boolean[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const workExperiences = [
    {
      title: "Freelance Web and App Development (09/22 - 11/24) Philippines",
      details: [
        "Developed and maintained various web applications",
        "Collaborated with clients to meet project requirements",
        "Utilized modern web technologies for efficient solutions",
      ],
    },
    {
      title: "Junior Frontend Developer (01/21 - 08/22) TechCorp",
      details: [
        "Built reusable React components",
        "Optimized UI for mobile and desktop",
        "Worked with UX designers to improve usability",
      ],
    },
    {
      title: "Intern - Software Development (06/20 - 12/20) Startup Inc.",
      details: [
        "Assisted in developing backend APIs",
        "Wrote documentation for project setup",
        "Fixed minor bugs and improved code quality",
      ],
    },
  ];

  useEffect(() => {
    setOpenWorkIndices(new Array(workExperiences.length).fill(false));
    setVisibleItems(new Array(workExperiences.length).fill(0));
  }, []);

  useEffect(() => {
    openWorkIndices.forEach((isOpen, index) => {
      if (
        isOpen &&
        visibleItems[index] < workExperiences[index].details.length
      ) {
        const timeout = setTimeout(() => {
          setVisibleItems((prev) => {
            const updated = [...prev];
            updated[index] += 1;
            return updated;
          });
        }, 400);

        return () => clearTimeout(timeout);
      }
    });
  }, [openWorkIndices, visibleItems]);

  const tabs = {
    Profile: {
      title: "Profile Tab",
      content: (
        <>
          <div className="character-reference-container">
            {/* Left Column */}
            <div className="character-reference-column">
              <p className="Tab-Title">
                <strong>Character Reference</strong>
              </p>
              <ul className="matrix-list matrix-parent-list">
                <li>
                  <span className="matrix-title">Citizenship</span>
                  <ul className="matrix-child-list">
                    <li>Filipino</li>
                  </ul>
                </li>
                <li>
                  <span className="matrix-title">Email</span>
                  <ul className="matrix-child-list">
                    <li>Andrewbondad124@gmail.com</li>
                  </ul>
                </li>
                <li>
                  <span className="matrix-title">Language</span>
                  <ul className="matrix-child-list">
                    <li>Filipino</li>
                    <li>English</li>
                  </ul>
                </li>
                <li>
                  <span className="matrix-title">Status</span>
                  <ul className="matrix-child-list">
                    <li>Single</li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Right Column */}
            <div className="character-reference-column text-center">
              <p className="Tab-Title">
                <strong>Work Experience</strong>
              </p>
              <ul className="matrix-list">
                {workExperiences.map((work, index) => (
                  <li key={index}>
                    <div
                      className="Work-Titles"
                      onClick={() => {
                        const updatedOpen = [...openWorkIndices];
                        const updatedVisible = [...visibleItems];
                        const nextState = !updatedOpen[index];

                        updatedOpen[index] = nextState;
                        if (nextState) {
                          updatedVisible[index] = 0; // restart typing
                        }

                        setOpenWorkIndices(updatedOpen);
                        setVisibleItems(updatedVisible);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {work.title}
                    </div>

                    <AnimatePresence>
                      {openWorkIndices[index] && (
                        <motion.ul
                          className="matrix-list"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          {work.details
                            .slice(0, visibleItems[index])
                            .map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
            <ul className="matrix-list">
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
            <ul className="matrix-list">
              <li>High School Diploma</li>
              <li>Senior Highschool Diploma (ICT STRAND)</li>
              <li>Completed Coursework in Information Technology</li>
              <li>Web and App Development Undergrad</li>
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
