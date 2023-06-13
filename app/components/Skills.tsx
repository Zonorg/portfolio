import React from "react";
import "../styles/skills.css";

const Skills = () => {
  const skills = [
    {
      title: "Web development",
      description:
        "Experienced in developing responsive and user-friendly websites using modern web technologies such as HTML, CSS, and JavaScript.",
    },
    {
      title: "Front-end development",
      description:
        "Skilled in front-end development, with expertise in frameworks like React and libraries like Redux to build dynamic and interactive user interfaces.",
    },
    {
      title: "Back-end development",
      description:
        "Knowledgeable in back-end development, including server-side technologies like Node.js and databases such as MongoDB and PostgreSQL to build robust and scalable web applications.",
    },
    {
      title: "UI/UX Design",
      description:
        "Familiar with user interface and user experience design principles, capable of creating visually appealing and user-friendly interfaces that enhance the overall user experience.",
    },
    {
      title: "Database Management",
      description:
        "Experienced in working with relational databases like PostgreSQL and MySQL, as well as NoSQL databases like MongoDB. Skilled in writing queries, optimizing database performance, and designing database schemas.",
    },
    {
      title: "Git Version Control",
      description:
        "Proficient in using Git for version control, including creating branches, merging code, and collaborating with other developers to manage and track changes in projects.",
    },
  ];

  return (
    <div className="skills">
      <h1>Skills-Set</h1>

      <div className="cards-container">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
