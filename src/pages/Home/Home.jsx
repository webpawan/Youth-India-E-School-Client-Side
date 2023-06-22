import React from "react";
// import "./global.css";

import Sections__one from "./sections/sections__one/Sections__one";
import Sections__two from "./sections/section__two/Sections__two";
import Section__three from "./sections/section_three/Section__three";
import Section__four from "./sections/section__four/Section__four";
import Section__five from "./sections/section__five/Section__five";
import Section__six from "./sections/section__six/Section__six";
import Section__seven from "./sections/section__seven/Section__seven";
const Home = () => {
  return (
    <>
      <Sections__one />
      <Sections__two />
      <Section__three />
      <Section__four />
      <Section__five />
      <Section__six />
      <Section__seven />
    </>
  );
};

export default Home;
