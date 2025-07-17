import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};
const renderContent = {
  1: (
    <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Avanesh</span>👋
      <br />A Software Engineer From India
    </h1>
  ),
  2: (
    <InfoBox
      text="Loves learning new skills and has learnt many in the process"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Have a Look at my projects"
      link="/projects"
      btnText="Projects"
    />
  ),
  4: (
    <InfoBox
      text="Team player ready to code, create, and contribute."
      link="/contact"
      btnText="Let's connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
