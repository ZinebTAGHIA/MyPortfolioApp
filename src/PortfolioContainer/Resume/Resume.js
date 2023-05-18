import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Professional Experience", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "PHP" },
    { skill: "JQuery" },
    { skill: "Angular" },
    { skill: "React JS" },
    { skill: "React Native" },
    { skill: "Symfony" },
    { skill: "Laravel" },
    { skill: "Express JS" },
    { skill: "Node JS" },
    { skill: "Oracle" },
    { skill: "MySQL" },
    { skill: "PostgreSQL" },
    { skill: "Mongo Db" },
  ];

  const projectsDetails = [
    {
      title: "End-of-year project (PFA)",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Design and development of a web application for managing student document requests.",
      subHeading: "Technologies Used: React JS / PHP Laravel, PostgreSQL",
    },
    {
      title: "Managing routes App",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Design and development of a desktop application for managing routes.",
      subHeading: "Technologies Used: Python, PyQt5",
    },
    {
      title: "E-commerce website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "Design and development of an e-commerce website",
      subHeading: "Technologies Used: HTML, CSS, JavaScript, PHP, MySQL",
    },
    {
      title: "Distributed Oracle database",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Management of a distributed database on remote Oracle servers - Case of a bank",
      subHeading:
        "Technologies Used: SQL, PL/SQL, Oracle SQL Developer, VirtualBox",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"State engineer diploma"}
        subHeading={"National School of Applied Sciences (ENSA), El Jadida"}
        fromDate={"2022"}
        toDate={"2025"}
        description={"Field : Computer engineering and emerging technologies"}
      />

      <ResumeHeading
        heading={"Bachelor's degree in Science and Technology (LST)"}
        subHeading={"Faculty of Sciences and Technologies (FST), Settat"}
        fromDate={"2021"}
        toDate={"2022"}
        description={"Field : Computer Engineering"}
      />
      <ResumeHeading
        heading={
          "Diploma of University Studies in Science and Technology (DEUST)"
        }
        subHeading={"Faculty of Sciences and Technologies (FST), Settat"}
        fromDate={"2019"}
        toDate={"2021"}
        description={"Field : Maths-Computer Science-Physics (MIP)"}
      />
      <ResumeHeading
        heading={"Baccalaureate"}
        subHeading={"Abdelmalek Essaadi High School, Kenitra"}
        fromDate={"2018"}
        toDate={"2019"}
        description={"Field : Mathematical Sciences B, French option"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Doctoral Studies Center of Hassan 1st University"}
          subHeading={"End-of-studies internship (PFE)"}
          fromDate={"04/2022"}
          toDate={"06/2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Aims : Design and implementation of a microservice for managing
            appointments for doctoral students registered in the doctoral
            studies center.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Technologies : Angular / PHP Laravel, MySQL
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
