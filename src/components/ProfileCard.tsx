import "../css/ProfileCard.css";
import profileImage from "../assets/qq.png";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingEffect from "./TypingEffect"; // Import the typing component

export default function BasicCard() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  // Your existing state
  const [openWorkIndices, setOpenWorkIndices] = useState<boolean[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Matrix titles object (you already have this)
  const MatrixTitles = {
    Profile: { normal: "Profile", matrix: "Profile" },
    Education: { normal: "Education", matrix: "Education" },
    Skills: { normal: "Skills", matrix: "Skills" },
  };

  // Your existing work experiences array
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
  const attendedSchools = [
    {
      title: "Blessed School of Salitran (06/18 - 04/21)",
      details: [
        "Honorary excellence in academics",
        "Best in Research",
        "Science and Technology Award",
      ],
    },
    {
      title: "STI College Cavite (06/21 - 04/23)",
      details: [
        "Best in Web Development",
        "Best in Mobile App Development",
        "Academic excellence award",
      ],
    },
    {
      title: "National University (06/23 - Present)",
      details: [
        "Software Engineering Student",
        "Participated in hackathons",
        "Internship in software development",
      ],
    },
  ];

  // Matrix mode switching (you already have this logic)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsMatrixMode((prev) => !prev);
    }, 8000); // Switch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Your existing useEffects for work experiences
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

  useEffect(() => {
    setOpenWorkIndices(new Array(attendedSchools.length).fill(false));
    setVisibleItems(new Array(attendedSchools.length).fill(0));
  }, []);
  //for attended schools in education tab
  useEffect(() => {
    openWorkIndices.forEach((isOpen, index) => {
      if (
        isOpen &&
        visibleItems[index] < attendedSchools[index].details.length
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
      title: (
        <span
          className={isMatrixMode ? "matrix-title-font" : "normal-title-font"}
        >
          <TypingEffect
            normalText={MatrixTitles.Profile.normal}
            matrixText={MatrixTitles.Profile.matrix}
            normalClassName="normal-title-font"
            matrixClassName="matrix-title-font"
            totalCycleDuration={8000}
            showCursor
          />
        </span>
      ),
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
                <strong>Work Experience (Click to expand)</strong>
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
                          updatedVisible[index] = 0;
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
      title: (
        <span
          className={isMatrixMode ? "matrix-title-font" : "normal-title-font"}
        >
          <TypingEffect
            normalText={MatrixTitles.Education.normal}
            matrixText={MatrixTitles.Education.matrix}
            normalClassName="normal-title-font"
            matrixClassName="matrix-title-font"
            totalCycleDuration={8000}
            showCursor
          />
        </span>
      ),
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
            <p className="Tab-Title">
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
            <p className="Tab-Title">
              <strong>Attended Schools and Universities</strong>
            </p>
            <ul className="matrix-list">
              {attendedSchools.map((work, index) => (
                <li key={index}>
                  <div
                    className="Work-Titles"
                    onClick={() => {
                      const updatedOpen = [...openWorkIndices];
                      const updatedVisible = [...visibleItems];
                      const nextState = !updatedOpen[index];

                      updatedOpen[index] = nextState;
                      if (nextState) {
                        updatedVisible[index] = 0;
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
      ),
      buttonText: "Explore Skills",
    },

    Skills: {
      title: (
        <span
          className={isMatrixMode ? "matrix-title-font" : "normal-title-font"}
        >
          <TypingEffect
            normalText={MatrixTitles.Skills.normal}
            matrixText={MatrixTitles.Skills.matrix}
            normalClassName="normal-title-font"
            matrixClassName="matrix-title-font"
            totalCycleDuration={8000}
            showCursor
          />
        </span>
      ),
      content: (
        <>
          <div className="skills-container">
            <div className="skills-column">
              <p className="Tab-Title">
                <strong>What I can do and have done</strong>
              </p>

              <ul className="skills-list">
                {[
                  {
                    title: "Web and App Development",
                    content:
                      "Built responsive UIs and modular components using React, TypeScript, and modern tooling.",
                  },
                  {
                    title: "Clerical and VA Experience",
                    content:
                      "Managed scheduling, emails, and document processing with professionalism and clarity.",
                  },
                  {
                    title: "English Proficiency",
                    content:
                      "Strong written and verbal communication across technical and formal contexts.",
                  },
                  {
                    title: "Hardware and Software",
                    content:
                      "Troubleshoots and optimizes systems across OS environments, productivity, and dev tools.",
                  },
                  {
                    title: "Process Optimization",
                    content:
                      "Streamlined workflows, standardized communication formats, and clarified terminology.",
                  },
                  {
                    title: "Team Communication",
                    content:
                      "Bridges technical depth with team clarity; develops glossaries and communication SOPs.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-title">
                      <span className="glow-icon">{">"}</span> {item.title}
                    </span>
                    <p className="skill-text">
                      <span className="glow-icon">{">"}</span> {item.content}
                    </p>
                    <div className="skill-image-wrapper">
                      <img
                        src={profileImage}
                        alt={`${item.title} visual`}
                        className="skill-image"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ),
      buttonText: "Explore Skills",
    },
  };

  const currentTab = tabs[activeTab as keyof typeof tabs];

  <div className={`tab-content ${fadeClass}`}>
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, filter: "hue-rotate(120deg)", scale: 1.02 }}
        animate={{ opacity: 1, filter: "hue-rotate(0deg)", scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="matrix-transition"
      >
        {currentTab.content}
      </motion.div>
    </AnimatePresence>
  </div>;

  return (
    <div className="container mt-5">
      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h2 className="profile-name">Vincent Mangalili</h2>
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
