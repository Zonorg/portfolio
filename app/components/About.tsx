"use client";
import React from "react";
import Link from "next/link";
import "../styles/about.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <h1>{"Hi, I'm a Fullstack Developer </>"}</h1>
      <p>
        I&apos;m Renzo Viscio, a proactive Fullstack Developer with a passion for
        tackling challenging projects and driving growth.
      </p>
      <div className="wrapper">
        <h2>Connect with me</h2>
        <div className="icon linkedin">
          <h5 className="tooltip tooltip-linkedin">Linkedin</h5>
          <Link
            href="https://www.linkedin.com/in/renzo-viscio-b69a13217/"
            target="_blank"
          >
            <span>
              <FaLinkedin className="social-icon linkedin" />
            </span>
          </Link>
        </div>
        <div className="icon github">
          <h5 className="tooltip">Github</h5>
          <Link href="https://github.com/Zonorg" target="_blank">
            <span>
              <FaGithub className="social-icon github" />
            </span>
          </Link>
        </div>
        <div className="icon instagram">
          <h5 className="tooltip">Instagram</h5>
          <Link href="https://www.instagram.com/renzoviscio/" target="_blank">
            <span>
              <FaInstagram className="social-icon instagram" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

