import React from "react";
import "../assets/navBar.css";
import { AiOutlineMenu, AiOutlineLaptop } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="nav-cont">
      <di className="nav-bar-main">
        <div className="title-nav">
          <AiOutlineLaptop />
          <h1 className="title-h1">Andrés García</h1>
        </div>
        <button
          className="button-nav"
          onClick={() => {
            setIsExpanded(!isExpanded);
            console.log("action button");
          }}
        >
          <AiOutlineMenu />
        </button>
      </di>

      <ul className={isExpanded ? null : "OffExpanded"}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
