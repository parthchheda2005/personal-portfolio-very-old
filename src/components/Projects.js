import React from "react";
import BillSpliter from "./project-images/bill-splitter-image.png";
import MovieSS from "./project-images/movie-app-ss.png";
import CoursePlanner from "./project-images/course-planner.png";
import DSCI from "./project-images/dsci-img-v2.png";
import Portfolio from "./project-images/personal-portfolio-img.png";

const myProjects = [
  {
    projectName: "My Coding Portfolio",
    githubRepo: "https://github.com/parthchheda2005/personal-website",
    description:
      "Made a portfolio for my coding projects in React and CSS. Used this as an opportunity to learn about CSS classes and developing responsive UIs to work on all screens. Also used this as an opportunity to gain a deeper understanding of JSX, rendering arrays and some practice on state.",
    img: Portfolio,
  },
  {
    projectName: "Heart Disease Predictor",
    githubRepo:
      "https://github.com/parthchheda2005/dsci-100-project/blob/main/heart_disease_report.ipynb",
    description:
      "Made a Heart Disease Predictor in R using the K-Nearest Neighbors algorithm using a dataset on Kaggle called Heart Disease Dataset by David Lapp. The system had an accuracy and recall of roughly 70%.",
    img: DSCI,
    style: { height: "10%" },
  },
  {
    projectName: "Movie Database",
    githubRepo: "https://github.com/parthchheda2005/movie-list",
    description:
      "Made an IMDb-like movie database using React and CSS. Did so by connecting to the TMDB API. The database displays popular movies, and enables search for movies by name. You can also rate and review movies, and see the movies that you have rated.",
    img: MovieSS,
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
    <section id="projects">
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
    </section>
  );
}

function ProjectCard({ projectName, githubRepo, description, img, style }) {
  function redirectToRepo() {
    window.open(githubRepo, "_blank");
  }

  return (
    <div
      className="card"
      onClick={redirectToRepo}
      style={{ cursor: "pointer" }}
    >
      <img style={style} src={img} alt={projectName} />
      <h4>{projectName}</h4>
      <p>{description}</p>
    </div>
  );
}
