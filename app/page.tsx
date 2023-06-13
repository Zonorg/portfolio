import React from "react";
import "./styles/page.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="main">
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
