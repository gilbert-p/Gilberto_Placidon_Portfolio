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

  const navigateAbout = (e) => {
    e.preventDefault();
    if (showMenu) {
      gsap.to(".mobile-nav-container", { top: scrollBack, duration });
      setShowMenu(!showMenu);
    }
    gsap.to(window, { duration: 1, scrollTo: ".about-me-content" });
  };

  const navigateSkills = (e) => {
    e.preventDefault();
    if (showMenu) {
      gsap.to(".mobile-nav-container", { top: scrollBack, duration });
      setShowMenu(!showMenu);
    }
    gsap.to(window, { duration: 1, scrollTo: ".skills-container" });
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
          <a onClick={navigateAbout} href="#" id="mobile-about-me-link">
            <span>About Me</span>
          </a>
          <a onClick={navigateSkills} href="#" id="mobile-skills-link">
            <span>Skills</span>
          </a>
          <a href="" id="mobile-projects-link">
            <span>Projects</span>
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
          <div className="about-me-link" onClick={navigateAbout}>
            About
          </div>
          <div className="skills-link">Skills</div>
          <div className="projects-link">Projects</div>
        </div>
      </div>
    </>
  );
};

export default MyNav;
