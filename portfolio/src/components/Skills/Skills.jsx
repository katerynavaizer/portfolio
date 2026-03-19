import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaDatabase,
  FaGitAlt,
  FaJira,
  FaCodeBranch,
  FaUsers,
  FaSync,
  FaServer,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-grid">
        {/* Card 1 */}
        <div className="skill-card">
          <h3 className="skill-category-title">Languages</h3>
          <div className="skill-items">
            <span className="skill-item">
              <SiJavascript className="skill-icon" color="#F7DF1E" /> JavaScript
            </span>
            <span className="skill-item">
              <FaHtml5 className="skill-icon" color="#E34F26" /> HTML/CSS
            </span>
            <span className="skill-item">
              <FaDatabase className="skill-icon" color="#336791" /> SQL
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="skill-card">
          <h3 className="skill-category-title">Frameworks & Libraries</h3>
          <div className="skill-items">
            <span className="skill-item">
              <FaReact className="skill-icon" color="#61DAFB" /> React
            </span>
            <span className="skill-item">
              <FaNodeJs className="skill-icon" color="#339933" /> Node.js
            </span>
            <span className="skill-item">
              <FaServer className="skill-icon" color="#81B5A1" /> ServiceNow
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="skill-card">
          <h3 className="skill-category-title">Tools & Concepts</h3>
          <div className="skill-items">
            <span className="skill-item">
              <FaGitAlt className="skill-icon" color="#F05032" /> Git
            </span>
            <span className="skill-item">
              <FaCodeBranch className="skill-icon" color="#4a5568" /> Version
              Control
            </span>
            <span className="skill-item">
              <FaJira className="skill-icon" color="#0052CC" /> Jira
            </span>
            <span className="skill-item">
              <FaSync className="skill-icon" color="#4a5568" /> Agile
            </span>
            <span className="skill-item">
              <FaUsers className="skill-icon" color="#4a5568" /> Mentorship
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
