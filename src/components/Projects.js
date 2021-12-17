import React, { useState } from "react";
import "../styles/Projects.scss";
import { gsap } from "gsap";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import culb_1 from "../assets/slideshow/culb_1.png";
import culb_2 from "../assets/slideshow/culb_2.png";
import culb_3 from "../assets/slideshow/culb_3.png";
import culb_4 from "../assets/slideshow/culb_4.png";
import culb_5 from "../assets/slideshow/culb_5.png";
import culb_6 from "../assets/slideshow/culb_6.png";
import culb_7 from "../assets/slideshow/culb_7.png";
import gina_1 from "../assets/slideshow/gina_1.png";
import gina_2 from "../assets/slideshow/gina_2.png";
import gina_3 from "../assets/slideshow/gina_3.png";
import gina_4 from "../assets/slideshow/gina_4.png";
import gina_5 from "../assets/slideshow/gina_5.png";
import gina_6 from "../assets/slideshow/gina_6.png";
import gina_7 from "../assets/slideshow/gina_7.png";
import mdl_1 from "../assets/slideshow/mdl_1.png";
import mdl_2 from "../assets/slideshow/mdl_2.png";


const Projects = () => {
  const [showSlideShow, setSlideShow] = useState(false);
  const [current_image_set, setImageSet] = useState("amzn_1");

  // const slideImages = [
  //   slide_1, slide_2
  // ];

  const slideshowImages = {
    "amzn_1" : [culb_7, culb_1, culb_2, culb_3, culb_4, culb_5, culb_6],
    "amzn_2" : [gina_1, gina_2, gina_3, gina_4, gina_5, gina_6, gina_7],
    "mdl"    : [mdl_1, mdl_2]
    };

  const properties = {
    arrows: true
  };

  const showContent = (id) => {
    setSlideShow(true);
    setImageSet(id);
  }


  return (
    <>
      <section id="web-design" class="section-container">
        <div className="section-header">
        <h3>WEB DESIGN</h3>
        </div>
        <div className="content-container">
        <div className="amzn_dsp_1 content-block" onClick={()=>{showContent("amzn_1")}}>
            <div className="amzn_dsp_1 background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Sword Animaiton</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="amzn_dsp_2 content-block" onClick={()=>{showContent("amzn_2")}}>
            <div className="amzn_dsp_2 background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Sword Animaiton</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="mdl content-block" onClick={()=>{showContent("mdl")}}>
            <div className="mdl background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Sword Animaiton</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
        </div>
   

      </section>

      <section id="digital-art" class="section-container">
        <div className="section-header">
        <h3>DIGITAL ART</h3>
        </div>
        <div className="content-container">
          <div className="transistor_sword content-block">
            <div className="transistor_sword background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Sword Animaiton</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="airplane content-block">
          <div className="airplane background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Earth 2D</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="psp_voxel content-block">
            <div className="psp_voxel background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">PSP Voxel</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
        </div>

        {/* <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script> */}
   

      </section>
      {showSlideShow ?       
      (<div className="slide-container">
                <div className="close-button" onClick={()=>{setSlideShow(false)}}>
                  <p>CLOSE</p>
                </div>

                  <Slide {...properties} easing="ease">

                  {slideshowImages[current_image_set].map((slide_item, index) => (
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideshowImages[current_image_set][index]})`}}></div>
                  </div>
                  ))};
                    {/* <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideshowImages[current_image_set][0]})`}}></div>
                      <span>Slide 1</span>
                    </div>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slideshowImages[current_image_set][1]})`}}></div>
                      <span>Slide 1</span>
                    </div> */}
                  </Slide>


      </div>) : null}


    </>
  );
};

export default Projects;
