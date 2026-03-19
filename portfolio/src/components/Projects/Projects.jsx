import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import project1img from "../../assets/project1.png";
import project2img from "../../assets/project2.png";
import project3img from "../../assets/project3.png";

function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-list">
        <div className="project-card">
          <div className="project-content">
            <h3 className="project-name">Lemonade Stand Full-Stack App</h3>
            <p className="project-description">
              This is a full-stack e-commerce application allowing users to view
              a menu of beverages, manage a shopping cart, and place orders. It
              features a persistent PostgreSQL database, order validation, and a
              responsive UI.
            </p>

            <div className="project-tech-stack">
              <span className="tech-tag">React + Vite</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/katerynavaizer/lemonade-stand"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> Code
              </a>
              <a
                href="https://katerynavaizer.github.io/lemonade-stand/"
                target="_blank"
                rel="noreferrer"
                className="project-link primary"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          <div className="project-image-wrapper">
            <img
              src={project1img}
              alt="project screenshot"
              className="project-image"
            />
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3 className="project-name">Eventure</h3>
            <p className="project-description">
              A full-stack event coordination system with dynamic scheduling, a
              secure user registration engine, and a public-facing attendee
              directory.
            </p>

            <div className="project-tech-stack">
              <span className="tech-tag">React + Vite</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/katerynavaizer/eventure_project"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>

          <div className="project-image-wrapper">
            <img
              src={project2img}
              alt="project screenshot"
              className="project-image"
            />
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3 className="project-name">Cartoga</h3>
            <p className="project-description">
              A dynamic, client-side travel coordination tool built with Vanilla
              JavaScript. This project focuses on managing complex state without
              frameworks, featuring a custom-built itinerary builder,
              interactive destination filtering.
            </p>

            <div className="project-tech-stack">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/katerynavaizer/cartoga_1.git"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>

          <div className="project-image-wrapper">
            <img
              src={project3img}
              alt="project screenshot"
              className="project-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
