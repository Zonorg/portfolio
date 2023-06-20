import React from "react";
import "../styles/header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <h2>Renzo Viscio</h2>
      <Link href="/">Home</Link>
      <Link href="/#skills">Skills</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/contact">Contact</Link>
      <select>
        <option value="eng">{"\uD83C\uDDFA\uD83C\uDDF8"}</option>
        <option value="spa">{"\uD83C\uDDEA\uD83C\uDDF8"}</option>
      </select>
    </div>
  );
};

export default Header;
