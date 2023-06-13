import React from "react";
import "../styles/header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/ ">Home</Link>
      <Link href="/contact">Contact</Link>
      <select>
        <option>Eng</option>
        <option>Spa</option>
      </select>
    </div>
  );
};

export default Header;
