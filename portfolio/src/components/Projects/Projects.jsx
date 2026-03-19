import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image-placeholder">
            <span>Project Screenshot Here</span>
          </div>
          <div className="project-content">
            <h3 className="project-name">Full-Stack Task Manager</h3>
            <p className="project-description">
              A robust web application with secure authentication, built to
              handle complex data relationships. Features include real-time
              updates and a custom REST API.
            </p>

            <div className="project-tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/katerynavaizer/project1"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> Code
              </a>
              <a
                href="https://live-site-link.com"
                target="_blank"
                rel="noreferrer"
                className="project-link primary"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image-placeholder">
            <span>Project Screenshot Here</span>
          </div>
          <div className="project-content">
            <h3 className="project-name">ServiceNow Integration Dashboard</h3>
            <p className="project-description">
              An enterprise-level dashboard connecting complex ServiceNow
              workflows with modern frontend architecture to streamline internal
              processes.
            </p>

            <div className="project-tech-stack">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">ServiceNow API</span>
              <span className="tech-tag">HTML/CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/katerynavaizer/project2"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
