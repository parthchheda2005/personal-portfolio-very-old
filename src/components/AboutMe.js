import React from "react";

export default function AboutMe() {
  return (
    <div className="about-me">
      <header>
        <h1>About Me</h1>
      </header>
      <div className="split-container">
        <div className="left-section">
          <p>
            {"  "}Hello! My name is Parth, and I am a sophmore Computer Science
            student at the University of British Columbia. I loved coding since
            the moment I picked it up in highschool. I enjoy solving complex
            problems since it enables me to learn and grow as a programmer.{" "}
            <br />
            <br />
            {"  "}I am proficient in React, HTML, CSS, Javascript, Java and R. I
            am eager to apply my knowledge and creativity to contribute to
            dynamic projects and collaborate with like-minded professionals, and
            excited to take the next step in my journey to become a proficient
            developer and make a positive impact in the tech industry.
          </p>
        </div>
        <div className="right-section">
          <div className="skills">
            <header>
              <h2 style={{ color: "#000000" }}>Notable Skills</h2>
            </header>
            <ul>
              <li>
                <img
                  src="https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png"
                  alt="HTML"
                />
                <p>HTML</p>
              </li>
              <li>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png?f=webp"
                  alt="CSS"
                />
                <p>CSS</p>
              </li>
              <li>
                <img
                  src="https://wallpapers.com/images/high/java-programming-language-logo-transparent-di2vw5k4m7u6y3ht.png"
                  alt="Java"
                />
                <p>Java</p>
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="Javascript"
                />
                <p>JavaScript</p>
              </li>
              <li>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                  alt="React"
                />
                <p>React</p>
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
                  alt="git"
                />
                <p>Git</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
