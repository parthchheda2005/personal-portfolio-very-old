import "./App.css";
import Intro from "./components/Intro.js";
import Navbar from "./components/Navbar.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import ContactMe from "./components/ContactMe.js";
import { useState, useEffect } from "react";

function App() {
  const [showNav, setShowNav] = useState(true);

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          setShowNav((currState) => !currState);
        }
      }
      window.addEventListener("keydown", callback);

      return function () {
        window.removeEventListener("keydown", callback);
      };
    },
    [showNav]
  );

  return (
    <div>
      {showNav && <Navbar />}
      <Intro />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
