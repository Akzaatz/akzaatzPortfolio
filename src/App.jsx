import React from "react";
import Nav from "./components/navbarre/Nav";
import Header from "./components/header/Header";
import Achievements from "../src/components/achievements/Achievements";
import Skills from "../src/components/skills/Skills";
import Modal from "./components/modal/Modal";
import Footer from "./components/footer/Footer";
import Languages from "../src/components/languages/Languages";
import BubbleZone from "./components/bubblezone/BubbleZone";
import Bubble from "./components/bubble/Bubble";
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Achievements />
      <Skills />
      <Languages />
      <Footer />
    </div>
  );
};

export default App;
