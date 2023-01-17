import React from "react";
import { SlDoc } from "react-icons/sl";
import react from "../assets/img/logotipo-react.png";
import git from "../assets/img/logotipo-git.png";
import mysql from "../assets/img/logotipo-mysql.png";
import javascript from "../assets/img/logotipo-javascript.png";
import css from "../assets/img/logotipo-de-css-3.png";
import html from "../assets/img/logotipo-html-5.png";
import "../assets/about.css";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="text-about about-cont">
          <h3 className="title-about">About</h3>
          <h4 className="text">Who am i?</h4>
          <h5 className="text">
            I'm Andres García, Web Developer / Software Engineering.
          </h5>
          <p className="text">
            I am a Andrés García, I am a web developer with excellent
            communication skills, I love collaborating and working as a team, I
            am looking for a full time position in web develompen, where I can
            apply my knowledge and skills to continue improving.
          </p>
          <button>
            <SlDoc /> Download CV
          </button>
        </div>
        <div className="skills-about about-cont">
          <h4>My skills:</h4>
          <div className="icon-cont">
            <img className="icon-skill" src={html} alt="" />
            <img className="icon-skill" src={css} alt="" />
            <img className="icon-skill" src={javascript} alt="" />
            <img className="icon-skill" src={git} alt="" />
            <img className="icon-skill" src={react} alt="" />
            <img className="icon-skill" src={mysql} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
