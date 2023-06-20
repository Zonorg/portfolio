import React from "react";
import Image from "next/image";
import Electroshop1 from "../../public/foto.png";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <div className="image-slider">
          <Image src={Electroshop1} alt="Project 1 Image 1" />
          <Image src={Electroshop1} alt="Project 1 Image 2" />
          <Image src={Electroshop1} alt="Project 1 Image 3" />
        </div>
        <p>Description of Project 1</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <div className="image-slider">
          <Image src={Electroshop1} alt="Project 2 Image 1" />
          <Image src={Electroshop1} alt="Project 2 Image 2" />
        </div>
        <p>Description of Project 2</p>
      </div>
    </div>
  );
};

export default Projects;
