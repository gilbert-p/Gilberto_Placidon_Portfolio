import React, { useState } from "react";
import "../styles/Projects.scss";
import temp_photo_1 from "../assets/vintage&morelli.jpg";
import GOL_Image_Still from "../assets/GOL_Image_Still.png";
import { gsap } from "gsap";
import GameOfLifeV2 from "./GameOfLifeV2";

const Projects = () => {
  const [showProject, setShowProject] = useState(false);
  const [duration, setDuration] = useState(0.3);
  const [scrollBack, setScrollBack] = useState("-150%");

  var projectShowcaseAnimation = gsap.timeline();

  const showGameOfLife = () => {
    projectShowcaseAnimation.to("#project-showcase", {
      top: "50%",
      duration: 0.5,
    });
    projectShowcaseAnimation
      .to("#project-showcase", {
        width: "100vw",
        duration: 0.5,
      })
      .then(() => {
        setShowProject(!showProject);
      });
  };

  const closeGameOfLife = () => {
    projectShowcaseAnimation.to("#project-showcase", {
      width: "100px",
      duration: 0.5,
    });
    projectShowcaseAnimation.to("#project-showcase", {
      top: "-150%",
      duration: 0.5,
    });
    setShowProject(!showProject);
  };

  return (
    <>
      <div id="projects-header" class="section-header">
        <svg
          stroke-width="0"
          viewBox="0 0 16 16"
          id="projects-icon"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.57159 4.92899L11.5006 0L16.4284 4.92899L11.5006 9.85797L6.57159 4.92899ZM9.85797 4.92899L11.5006 3.28754L13.1432 4.93015L11.5006 6.57159L9.85797 4.92899Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.5006L4.92899 6.57162L9.85797 11.5006L4.92899 16.4284L0 11.5006ZM3.28638 11.5006L4.92899 9.858L6.57159 11.5006L4.92899 13.1432L3.28754 11.5006H3.28638Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1432 11.5006L18.0722 16.4284L23 11.5006L18.0722 6.57162L13.1432 11.5006ZM18.0722 9.858L16.4296 11.5006L18.0722 13.1432L19.7136 11.5006L18.071 9.858H18.0722Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.57159 18.0722L11.5006 13.1432L16.4284 18.0722L11.5006 23L6.57159 18.0722ZM9.85797 18.0722L11.5006 16.4296L13.1432 18.0722L11.5006 19.7136L9.85797 18.071V18.0722Z"
            fill="white"
          />
        </svg>
        <h3>Projects</h3>
      </div>
      <section id="projects-card-container">
        <div
          id="game-of-life-project"
          className="project-card"
          onClick={showGameOfLife}>
          <div className="project-title">
            <p>Conway's Game of Life</p>
          </div>
          <div className="project-image-container">
            <img
              id="gol_img"
              src={GOL_Image_Still}
              alt="Game Of Life Image Still"
            />
          </div>
          <div className="project-details">
            <p>
              The goal of this project was to become accustomed with timed
              events using functional components and understanding how to write
              custom hooks.
            </p>
          </div>
        </div>
        <div id="other-project-1" className="project-card">
          <div className="project-title">
            <p>Conway's Game of Life</p>
          </div>
          <div className="project-image-container">
            <img id="project-image" src={temp_photo_1} alt="" />
          </div>
          <div className="project-details">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              ratione pariatur exercitationem quod autem provident in delectus
              rem, dolor earum!
            </p>
          </div>
        </div>
        <div id="other-project-2" className="project-card">
          <div className="project-title">
            <p>Conway's Game of Life</p>
          </div>
          <div className="project-image-container">
            <img id="project-image" src={temp_photo_1} alt="" />
          </div>
          <div className="project-details">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              ratione pariatur exercitationem quod autem provident in delectus
              rem, dolor earum!
            </p>
          </div>
        </div>
        <div id="project-showcase">
          {showProject ? <GameOfLifeV2></GameOfLifeV2> : null}
          <div className="close-button" onClick={closeGameOfLife}></div>
        </div>
      </section>
    </>
  );
};

export default Projects;
