import React from "react";
import "./images/javalogo.png";

export default function AboutMe() {
  return (
    <div className="about-me">
      <header>About Me</header>
      <div className="split-container">
        <div className="left-section">
          <p>
            Hello! My name is Parth, and I am a sophmore Computer Science
            student at the University of British Columbia. I loved coding since
            the moment I picked it up in highschool. I enjoy solving complex
            problems since it enables me to learn and grow as a programmer. I am
            proficient in React, HTML, CSS, Javascript, Java and R. I am eager
            to apply my knowledge and creativity to contribute to dynamic
            projects and collaborate with like-minded professionals, and excited
            to take the next step in my journey to become a proficient developer
            and make a positive impact in the tech industry.
          </p>
        </div>
        <div className="right-section">
          <div className="skills">
            <header>
              <h2>My Skills</h2>
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
                  src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Rlogo.png"
                  alt="R"
                />
                <p>R</p>
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
                  alt="Tailwind"
                />
                <p>Tailwind</p>
              </li>
              <li>
                <img src="https://pngimg.com/d/github_PNG65.png" alt="Github" />
                <p>Github and Git</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
