import React from "react";

export default function Navbar() {
  return (
    <nav className={`nav sticky-nav`}>
      <a href="#home" className="site-title">
        Parth Chheda
      </a>
      <ul>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contactme">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
