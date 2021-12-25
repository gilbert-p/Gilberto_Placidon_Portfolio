import React, { useEffect, useState } from "react";
import "../styles/MyNav.scss";
import logo from "../assets/temp_logo.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const MyNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [duration, setDuration] = useState(0.3);
  const [scrollBack, setScrollBack] = useState("-150%");

  const navigateHome = (e) => {
    e.preventDefault();
    if (showMenu) {
      gsap.to(".mobile-nav-container", { top: scrollBack, duration });
      setShowMenu(!showMenu);
    }
    gsap.to(window, { duration: 1, scrollTo: ".grid-container" });
  };

  const navigateSkills = (e) => {
    e.preventDefault();
    if (showMenu) {
      gsap.to(".mobile-nav-container", { top: scrollBack, duration });
      setShowMenu(!showMenu);
    }
    gsap.to(window, { duration: 1, scrollTo: "#skills-section" });
  };

  const navigateDesign = (e) => {
    e.preventDefault();
    if (showMenu) {
      gsap.to(".mobile-nav-container", { top: scrollBack, duration });
      setShowMenu(!showMenu);
    }
    gsap.to(window, { duration: 1, scrollTo: "#web-design" });
  };

  const navigateProjects = (e) => {
    e.preventDefault();
    if (showMenu) {
      gsap.to(".mobile-nav-container", { top: scrollBack, duration });
      setShowMenu(!showMenu);
    }
    gsap.to(window, { duration: 1, scrollTo: "#digital-art" });
  };

  const mobileMenu = () => {
    let isOpen = showMenu;
    if (!isOpen) {
      gsap.to(".mobile-nav-container", { top: 0, duration });
    } else {
      gsap.to(".mobile-nav-container", { top: scrollBack, duration });
    }

    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="nav-button">
        <div className="hamburger-nav" onClick={mobileMenu}></div>
      </div>
      <div className="mobile-nav-container">
        <div className="mobile-link-container">
          <a onClick={navigateHome} href="#" id="mobile-home-link">
            <span>Home</span>
          </a>
          <a onClick={navigateSkills} href="#" id="mobile-skills-link">
            <span>Skills</span>
          </a>
          <a onClick={navigateDesign} href="#" id="mobile-design-link">
            <span>Web Design</span>
          </a>
          <a onClick={navigateProjects} href="#" id="mobile-projects-link">
            <span>Digital Art</span>
          </a>
        </div>
      </div>
      <div className="nav-container">
        <div className="logo-container">
          <img id="nav-logo" src={logo} alt="Gilberto Placidon Logo" />
        </div>
        <div className="name-conatiner"></div>
        <div className="link-container">
          <div className="home-link" onClick={navigateHome}>
            Home
          </div>
          <div className="skills-link" onClick={navigateSkills}>
            Skills
          </div>
          <div className="design-link" onClick={navigateDesign}>
            Web Design
          </div>
          <div className="projects-link" onClick={navigateProjects}>
            Digital Art
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNav;
