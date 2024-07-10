import React from "react";
import Line from "../line/Line";

const Header = () => {
  return (
    <div className="header" id="header">
      <h1>Développeur Web</h1>
      <Line />
      <h2>Polyvalent</h2>

      <ul className="prez">
        <li>Maîtrise les principaux langages de Développement Web</li>
        <li>Maîtrise les outils informatiques et la communication digitale</li>
        <li>
          Accompagne le développement et l’application d’une stratégie
          commerciale
        </li>
      </ul>
    </div>
  );
};

export default Header;
