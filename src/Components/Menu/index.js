import React, { useState } from "react";
import "./Menu.scss";

function Menu({ setSceneName }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu-container">
      <ul className={`items ${isOpen ? "open" : ""}`}>
        <li className="item" onClick={() => setSceneName("tropical")}>
          The Tropical
        </li>
        <li className="item" onClick={() => setSceneName("rainBow")}>
          S2-The Rainbow
        </li>

        <div className="button" onClick={() => setIsOpen(!isOpen)}>
          <span>{!isOpen ? ">" : "<"}</span>
        </div>
      </ul>
    </div>
  );
}

export default Menu;
