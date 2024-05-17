import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Intro() {
  const [text] = useTypewriter({
    words: [
      "a Developer",
      "a Lifelong Learner",
      "Adaptable",
      "a Problem Solver",
    ],
    loop: {},
  });

  return (
    <div className="intro">
      <header>
        <h1
          style={{ fontWeight: "bold", textAlign: "center", fontSize: "80px" }}
        >
          Hi, I am <span style={{ color: "#006400" }}>Parth Chheda</span>
        </h1>
        <h2
          style={{ fontWeight: "bold", textAlign: "center", fontSize: "50px" }}
        >
          I am <span style={{ color: "#006400" }}>{text}</span>{" "}
          <Cursor cursorStyle="<" cursorColor="#8B4000" />
        </h2>
      </header>
    </div>
  );
}
