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
import transistor_gif from "../assets/transistor_gif.gif";
import earth_gif from "../assets/earth_gif.gif";
import tm_flower_gif from "../assets/tm_flower.gif";


const Projects = () => {
  const [showSlideShow, setSlideShow] = useState(false);
  const [current_image_set, setImageSet] = useState("amzn_1");

  const [showDuoContainer, setShowDuoContainer] = useState(false);
  const [currentGif, setCurrentGif] = useState("transistor_gif");


  const slideshowImages = {
    "amzn_1" : [culb_7, culb_1, culb_2, culb_3, culb_4, culb_5, culb_6],
    "amzn_2" : [gina_1, gina_2, gina_3, gina_4, gina_5, gina_6, gina_7],
    "mdl"    : [mdl_1, mdl_2]
    };

  const gifImages = {
    "transistor_gif": {
                       link: "https://codepen.io/epoxi117-the-lessful/pen/eYEEJKQ",
                       gif: transistor_gif, 
                       title: "Transistor Sword Animation", 
                       description: "The sword is based on the video game Transistor. The entire sequence is coordinated using CSS alone."
                      },
         "earth_gif": {
                       link: "https://codepen.io/epoxi117-the-lessful/pen/mdwNGKo",
                       gif: earth_gif, 
                       title: "Earth & Plane", 
                       description: "Based on a random image I found on the internet. This illustration features an infinite scrolling image for the earth. The plane itself will fly in from a random direction.",
                      },
        "tm_flower_gif": {
                      link: "https://codepen.io/epoxi117-the-lessful/pen/PoYQBoP",
                      gif: tm_flower_gif, 
                      title: "Live Flower", 
                      description: "All unique shapes were created using CSS and HTML. The petals rotate using Javascript."
                      },
  };

  const properties = {
    arrows: true
  };

  const showSlides = (id) => {
    setSlideShow(true);
    setImageSet(id);
  }

  const showDetail = (id) => {
    setShowDuoContainer(true);
    setCurrentGif(id);
    
  }


  return (
    <>
      <section id="web-design" class="section-container">
        <div className="section-header">
          <i id="design-icon" class="gg-if-design"></i>
          <h3>WEB DESIGN</h3>
        </div>
        <div className="content-container">
        <div className="amzn_dsp_1 content-block" onClick={()=>{showSlides("amzn_1")}}>
            <div className="amzn_dsp_1 background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Sword Animaiton</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="amzn_dsp_2 content-block" onClick={()=>{showSlides("amzn_2")}}>
            <div className="amzn_dsp_2 background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Sword Animaiton</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="mdl content-block" onClick={()=>{showSlides("mdl")}}>
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
          <i class="gg-image"></i>
          <h3>DIGITAL ART</h3>
        </div>
        <div className="content-container" >
          <div className="transistor_sword content-block" onClick={()=>showDetail("transistor_gif")}>
            <div className="transistor_sword background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Sword Animaiton</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="airplane content-block" onClick={()=>showDetail("earth_gif")}>
          <div className="airplane background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">Earth 2D</h2>
              <p>Coordinated animation using GSAP (Greensock)</p>
            </div>
            {/* <div id="transistor_sword" className="background-container"></div> */}
          </div>
          <div className="psp_voxel content-block" onClick={()=>showDetail("tm_flower_gif")}>
            <div className="psp_voxel background-mobile"></div>
            <div className="description-block">
              <h2 className="content-title">TM Flower</h2>
              <p>An animation based on Takashi Murakami's signature flower art.</p>
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
                  </Slide>
      </div>) : null}

      {showDuoContainer ?       
      (<div className="container">
        <div className="close-button" onClick={()=>{setShowDuoContainer(false)}}>
          <p>CLOSE</p>
        </div>

        <div className="duo-container">
            <div style={{'backgroundImage': `url(${gifImages[currentGif].gif})`}} className="gif-container"></div>
            <div className="description-block">
              <h2 className="content-title">{gifImages[currentGif].title}</h2>
              <p>{gifImages[currentGif].description}</p>
              <a href={`${gifImages[currentGif].link}`}>
                <div className="icon-link">
                  <span>View Code</span> 
                  <i class="gg-arrow-top-right-r"></i>
                </div>
              </a>
            </div>
        </div>
      </div>) : null}

    </>
  );
};

export default Projects;
