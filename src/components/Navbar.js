import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(function () {
    window.addEventListener("scroll", enableStickyNav);
    return function () {
      window.removeEventListener("scroll", enableStickyNav);
    };
  }, []);

  function enableStickyNav() {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  }

  return (
    <nav className={`nav ${stickyClass}`}>
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
