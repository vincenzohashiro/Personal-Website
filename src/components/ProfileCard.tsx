import "../css/ProfileCard.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingEffect from "./TypingEffect"; // Import the typing component
import CruzaderImg from "../assets/Cruzader.png";

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
      title: "Freelance Automation & Full-Stack Developer (Q2 2025 - Present)",
      details: [
        "Built workflow automations with Make.com, Zapier, and Monday.com to streamline operations",
        "Integrated forms, notifications, scheduling systems, and CRM pipelines through APIs",
        "Built an AI lead discovery agent using the Claude API with tool use",
        "Developed and deployed business websites, booking systems, and dashboards for clients",
        "Wrote SOPs and workflow documentation for onboarding and consistency",
      ],
    },
    {
      title: "Affiliate Marketing & Client Relations (Q1 2024 - Q3 2024)",
      details: [
        "Managed communication and relationships with international customers",
        "Consistently exceeded sales targets while improving retention",
      ],
    },
    {
      title: "Virtual Assistant - Web Development & Operations (Q3 2023 - Q1 2024)",
      details: [
        "Supported operations through workflow coordination and documentation",
        "Handled CMS updates, content organization, and digital assets",
        "Developed SOPs to improve onboarding and internal processes",
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
                    title: "Full Stack Web Development",
                    content:
                      "Built responsive websites and modular components using React, TypeScript, and modern tooling.",
                    image: CruzaderImg,
                  },
                  {
                    title: "Clerical and VA Support",
                    content:
                      "Managed scheduling, emails, and document processing with professionalism and clarity.",
                  },
                  {
                    title: "Automation Specialist",
                    content:
                      "Built CRM and operations workflows with Make.com, Zapier, and Monday.com, including automated lead handling and follow-ups.",
                  },
                  {
                    title: "AI Agents & Integrations",
                    content:
                      "Built an AI lead discovery agent on the Claude API that searches, analyzes, scores, and saves leads using tools and external APIs.",
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

                    {/* ✅ Only render the image if one exists */}
                    {item.image && (
                      <div className="skill-image-wrapper">
                        <img
                          src={item.image}
                          alt={`${item.title} visual`}
                          className="skill-image"
                        />
                      </div>
                    )}
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
        <h2 className="profile-name">Vincent Mangalili</h2>
        <p className="profile-title">Automation &amp; AI Specialist · Full-Stack Developer</p>
        <p className="profile-description">
          I build workflow automations with Make.com, Zapier, and Monday.com,
          along with API integrations, CRM systems, AI agents, and full-stack
          web applications. I've worked on real client projects involving
          automation, system integrations, troubleshooting, and documentation,
          and I'm comfortable learning new tools and building solutions
          tailored to how a business runs.
          <br />
          <br />
          <a
            href={`${
              import.meta.env.BASE_URL
            }files/Vincent_Mangalili_ATS_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            View Resume
          </a>
        </p>
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
