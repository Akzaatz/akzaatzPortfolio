import React from "react";
import Nav from "./components/navbarre/Nav";
import Header from "./components/header/Header";
import Achievements from "../src/components/achievements/Achievements";
import Skills from "../src/components/skills/Skills";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Achievements />
      <Skills />
    </div>
  );
};

export default App;
