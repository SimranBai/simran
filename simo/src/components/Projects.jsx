/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Tents Website",
      img: "/projects/project1.png",
      description: "Tents Selling website created in html, css, and javascript.",
    },
    {
      title: "Hostel Management Project",
      img: "/projects/project3.png",
      description: "Project created in c language for providing living facilities to students of universities",
    },
    
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
               
              </div>
              <div>
                  <p>{project.description}</p>
                  </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
