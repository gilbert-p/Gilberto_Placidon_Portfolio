import React, { useEffect } from "react";
import { CSS } from 'css.gg';
import Page_1 from "./components/Page_1";
import AboutMe from "./components/AboutMe";
import MyNav from "./components/MyNav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <MyNav />
      <Page_1 />
      {/* <AboutMe /> */}
      <Skills />
      <Projects />
    </>
  );
};

export default App;
