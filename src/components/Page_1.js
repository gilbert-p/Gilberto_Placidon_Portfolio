import React, { useEffect } from "react";
import "../styles/Page_1.scss";
import { gsap } from "gsap";

const Page_1 = () => {
  useEffect(() => {
    function circleAnimation() {
      gsap.to("#circ-1", {
        duration: 3,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: 360,
        ease: "linear",
      });
      gsap.to("#circ-2", {
        duration: 4.8,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: -360,
        ease: "linear",
      });
      gsap.to("#circ-3", {
        duration: 7.68,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: 360,
        ease: "linear",
      });
      gsap.to("#circ-4", {
        duration: 12.3,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: -360,
        ease: "linear",
      });
      gsap.to("#circ-5", {
        duration: 19.7,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: 360,
        ease: "linear",
      });
      gsap.to("#circ-6", {
        duration: 30.1,
        repeat: -1,
        svgOrigin: "50 50",
        rotation: -360,
        ease: "linear",
      });
    }
    circleAnimation();
  }, []);

  return (
    <>
      <div className="grid-container">
        <div id="title-container">
          <h1 id="name">Gilberto Placidon</h1>
          <h2 id="sub-title">Developer</h2>
        </div>

        <div className="swiss-circle-container">
          <svg viewBox="0 0 100 100">
            <circle
              xmlns="http://www.w3.org/2000/svg"
              id="circ-1"
              cx="50%"
              cy="50%"
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

export default Page_1;
