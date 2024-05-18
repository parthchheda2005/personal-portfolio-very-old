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
    <section id="home">
      <div className="intro">
        <header>
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
            Hi, I am Parth Chheda {/* #0A0250  #005D00*/}
          </h1>
          <h2
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            I am {text} <Cursor cursorStyle="<" cursorColor="#FFFFFF" />{" "}
            {/* 8B4000 000000 */}
          </h2>
        </header>
      </div>
    </section>
  );
}
