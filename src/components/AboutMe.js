import React, { useEffect, useRef, useState } from "react";
import "../styles/AboutMe.scss";
import laptop_img from "../assets/laptop_abstract.png";
import sass_img from "../assets/1280px-Sass_Logo_Color.png";
import node_img from "../assets/node-logo.png";
import react_img from "../assets/react-logo1.5x.png";
import firebase_img from "../assets/firebase-logo.png";
import gsap_img from "../assets/gsap-logo1.5x.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const [triggerContainer, setTriggerContainer] = useState(".about-me-content");
  const [triggerEnd, setTriggerEnd] = useState("+=25px");
  const [gsapScrub, setGsapScrub] = useState(2);

  const laptopRef = useRef(null);
  const sassRef = useRef(null);
  const nodeRef = useRef(null);
  const reactRef = useRef(null);
  const firebaseRef = useRef(null);
  const gsapRef = useRef(null);

  useEffect(() => {
    gsap.to(laptopRef.current, {
      translateY: "-50%",
      opacity: 1,
      scrollTrigger: {
        trigger: triggerContainer,
        start: "top center",
        end: triggerEnd,
        scrub: gsapScrub,
        // markers: true,
        id: "scrub",
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      },
    });

    gsap.to(sassRef.current, {
      x: -200,
      y: -0,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerContainer,
        start: "top center",
        end: triggerEnd,
        scrub: gsapScrub,
        // markers: true,
        id: "scrub",
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      },
    });

    gsap.to(nodeRef.current, {
      x: -150,
      y: -125,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerContainer,
        start: "top center",
        end: triggerEnd,
        scrub: gsapScrub,
        // markers: true,
        id: "scrub",
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      },
    });

    gsap.to(reactRef.current, {
      x: -0,
      y: -150,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerContainer,
        start: "top center",
        end: triggerEnd,
        scrub: gsapScrub,
        // markers: true,
        id: "scrub",
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      },
    });

    gsap.to(firebaseRef.current, {
      x: +175,
      y: -125,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerContainer,
        start: "top center",
        end: triggerEnd,
        scrub: gsapScrub,
        // markers: true,
        id: "scrub",
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      },
    });

    gsap.to(gsapRef.current, {
      x: +200,
      y: -0,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerContainer,
        start: "top center",
        end: triggerEnd,
        scrub: gsapScrub,
        // markers: true,
        id: "scrub",
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
        },
      },
    });
  }, []);

  return (
    // <div className="about-me-container">
    <div className="about-me-content">
      <div className="about-me-graphic-container">
        <div className="laptop">
          <img ref={laptopRef} id="laptop-graphic" src={laptop_img} alt="" />
        </div>
        <div ref={sassRef} id="sass-graphic">
          <img src={sass_img} alt="" />
        </div>
        <div ref={nodeRef} id="node-graphic">
          <img src={node_img} alt="" />
        </div>
        <div ref={reactRef} id="react-graphic">
          <img src={react_img} alt="" />
        </div>
        <div ref={firebaseRef} id="firebase-graphic">
          <img src={firebase_img} alt="" />
        </div>
        <div ref={gsapRef} id="gsap-graphic">
          <img src={gsap_img} alt="" />
        </div>
      </div>
      <div className="about-me-text-container">
        <h2>Hello There,</h2>
        <p>
          I’m an aspiring Frontend Developer with a focus in React, ES6,
          Firebase, and GSAP. I have a degree in Computer Science from
          California State University of Los Angeles.
        </p>
        <p>
          I also have a vested interest in web design with a focus on
          minimalism.
        </p>
      </div>
    </div>
    // </div>
  );
};

export default AboutMe;
