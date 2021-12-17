import React from "react";
import "../styles/Skills.scss";
import web_dev_art from "../assets/web-dev-art.png";
import react_logo from "../assets/react-logo.png";
import figma_logo from "../assets/figma-logo.png";
import nodejs_logo from "../assets/nodejs-logo.png";
import gsap_logo from "../assets/gsap-logo.png";

const Skills = () => {
  return (
    <>
      <section id="skills-section" className="section-container">
        <div className="section-header">
          <svg
            stroke-width="0"
            viewBox="0 0 16 16"
            id="tools-icon"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7092 18.2893L18.2893 19.7092C18.102 19.8955 17.8486 20 17.5844 20C17.3202 20 17.0668 19.8955 16.8795 19.7092L5.0004 7.84969C4.67523 7.94389 4.33897 7.99434 4.00047 7.99968C3.36383 7.99923 2.73649 7.8468 2.17061 7.55506C1.60473 7.26333 1.11667 6.84072 0.746996 6.32238C0.377322 5.80403 0.136721 5.20493 0.0451956 4.57487C-0.0463299 3.94481 0.0138649 3.302 0.220775 2.69989L2.76057 5.23979L3.29053 4.70981L4.71042 3.28987L5.24038 2.75989L2.70058 0.219991C3.30266 0.0130728 3.94544 -0.0471244 4.57548 0.0444047C5.20551 0.135934 5.80459 0.376545 6.32292 0.746232C6.84124 1.11592 7.26383 1.604 7.55556 2.1699C7.84728 2.7358 7.9997 3.36317 8.00016 3.99984C7.99481 4.33835 7.94437 4.67463 7.85017 4.9998L19.7092 16.8793C19.8955 17.0667 20 17.3201 20 17.5843C20 17.8485 19.8955 18.1019 19.7092 18.2893ZM0.29077 16.8793C0.104533 17.0667 0 17.3201 0 17.5843C0 17.8485 0.104533 18.1019 0.29077 18.2893L1.71066 19.7092C1.898 19.8955 2.15144 20 2.4156 20C2.67977 20 2.9332 19.8955 3.12055 19.7092L8.59011 14.2494L5.76034 11.4195L0.29077 16.8793ZM17.9994 0L13.9997 1.99992V3.99984L11.8299 6.16976L13.8297 8.16968L15.9995 5.99976H17.9994L19.9992 1.99992L17.9994 0Z"></path>
          </svg>
          <h3>SKILLS</h3>
        </div>
        <ul>
          <li>
            <figure>
              <img src={web_dev_art} class="skill-icon" alt="web_dev_art" />
            </figure>
            <div>
              <h6>Web Design & Development</h6>
              <h6>(HTML | CSS | Javascript)</h6>
            </div>
          </li>
          <li>
            <figure>
              <img src={react_logo} id="react-logo" alt="web_dev_art" />
            </figure>
            <div>
              <h6>Frontend Framework</h6>
              <h6>(Reactjs)</h6>
            </div>
          </li>
          <li>
            <figure>
              <img src={figma_logo} alt="web_dev_art" />
            </figure>
            <div>
              <h6>Ui/Ux Design</h6>
              <h6>(Figma | Illustrator)</h6>
            </div>
          </li>
          <li>
            <figure>
              <img src={nodejs_logo} alt="web_dev_art" />
            </figure>
            <div>
              <h6>Backend Development</h6>
              <h6>(Node.js | Express.js | GraphQL)</h6>
            </div>
          </li>
          <li>
            <figure>
              <img src={gsap_logo} alt="web_dev_art" />
            </figure>
            <div>
              <h6>Animation</h6>
              <h6>(Green Sock [GSAP])</h6>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Skills;
