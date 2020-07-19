import React, { useEffect } from "react";
import "./SvgTest.scss";
import { gsap } from "gsap";

const SvgTest = () => {
  useEffect(() => {
    function geometricCircle() {
      gsap.to("#circ-1", {
        duration: 5,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: 360,
        ease: "linear",
      });
      gsap.to("#circ-2", {
        duration: 8.1,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: -360,
        ease: "linear",
      });
      gsap.to("#circ-3", {
        duration: 12.9,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: 360,
        ease: "linear",
      });
      gsap.to("#circ-4", {
        duration: 20.9,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: -360,
        ease: "linear",
      });
      gsap.to("#circ-5", {
        duration: 33.8,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: 360,
        ease: "linear",
      });
      gsap.to("#circ-6", {
        duration: 30,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: -360,
        ease: "linear",
      });
    }
    geometricCircle();
  }, []);

  return (
    <>
      <div className="grid-container">
        <div id="title-container">
          <h1 id="name">Gilberto Placidon</h1>
          <h2 id="sub-title">Frontend Developer</h2>
        </div>

        <div className="swiss-circle-container">
          <svg viewBox="0 0 100 100">
            <circle
              xmlns="http://www.w3.org/2000/svg"
              id="circ-1"
              cx="50%"
              cy="50%"
              stroke="hsla(285,79%,76%,0.8)"
              strokeDasharray="10"
              strokeDashoffset="10"
              pathLength="12"
              r="37"
              fill="none"></circle>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                id="circ-2"
                cx="50%"
                cy="50%"
                stroke="hsla(330,75%,62%,1)"
                strokeDasharray="10"
                strokeDashoffset="10"
                pathLength="14"
                r="41"
                fill="none"></circle>
            </svg>
            <svg>
              <circle
                id="circ-3"
                cx="50%"
                cy="50%"
                stroke="hsla(150,35%,80%,1)"
                strokeDasharray="10"
                strokeDashoffset="10"
                pathLength="16"
                r="48"
                fill="none"></circle>
            </svg>
            <svg>
              <circle
                id="circ-4"
                cx="50%"
                cy="50%"
                stroke="hsla(200,65%,65%,1)"
                strokeDasharray="10"
                strokeDashoffset="10"
                pathLength="20"
                r="61"
                fill="none"></circle>
            </svg>
            <svg>
              <circle
                id="circ-5"
                cx="50%"
                cy="50%"
                stroke="hsla(50,65%,65%,1)"
                strokeDasharray="35"
                strokeDashoffset="15"
                pathLength="30"
                r="86"
                fill="none"></circle>
            </svg>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SvgTest;
