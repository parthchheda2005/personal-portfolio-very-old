import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Parth Chheda
      </a>
      <ul>
        <li>
          <a href="/AboutMe">About Me</a>
        </li>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
          <a href="/Contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
