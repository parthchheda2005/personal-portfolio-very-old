import React from "react";
import BillSpliter from "./project-images/bill-splitter-image.png";
import CoursePlanner from "./project-images/course-planner.png";
import DSCI from "./project-images/dsci-img-v2.png";
import Portfolio from "./project-images/personal-portfolio-img.png";

const myProjects = [
  {
    projectName: "My Coding Portfolio",
    githubRepo: "https://github.com/parthchheda2005/personal-website",
    description: "Made a portfolio for my coding projects in React and CSS.",
    img: Portfolio,
  },
  {
    projectName: "Heart Disease Predictor",
    githubRepo: "https://github.com/parthchheda2005/dsci-100-project",
    description:
      "Made a Heart Disease Predictor in R using a dataset on Kaggle called Heart Disease Dataset by David Lapp. The system had an accuracy and recall of roughly 70%.",
    img: DSCI,
    style: { height: "10%" },
  },
  {
    projectName: "Cash Split Website",
    githubRepo: "https://github.com/parthchheda2005/bill-splitter",
    description:
      "Made a website to split bills with friends in React, based on who paid for the meal and how much each person spent. Keeps record of who owes who what, and the amount of friends on the app.",
    img: BillSpliter,
  },
  {
    projectName: "Course Planner",
    githubRepo: "https://github.com/parthchheda2005/Course-Tracker",
    description:
      "Made a CRUD course planner using Java and the Swing Library. I also added data persistence using JSON. The code is all unit tested using the JUnit test library.",
    img: CoursePlanner,
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <header>
        <h1>Projects</h1>
      </header>
      <div className="project-list">
        <ul>
          {myProjects.map((p, acc) => (
            <li>
              <ProjectCard
                projectName={p.projectName}
                img={p.img}
                githubRepo={p.githubRepo}
                description={p.description}
                key={acc + 1}
                style={p.style || {}}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectCard({ projectName, githubRepo, description, img, style }) {
  return (
    <div className="card">
      <img style={style} src={img} alt={projectName} />
      <h4>{projectName}</h4>
      <p>{description}</p>
    </div>
  );
}
