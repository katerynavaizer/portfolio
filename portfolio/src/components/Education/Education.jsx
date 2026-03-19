import "./Education.css";

const educationData = [
  {
    school: "BrainStation",
    degree: "Software Engineering Bootcamp - Brainstation",
    location: "Toronto, ON",
    period: "Sep 2025 - Mar 2026",
  },
  {
    school: "Seneca Polytechnic",
    degree: "Bachelor of Technology - BTech, Software Development",
    location: "Toronto, ON",
    period: "2017 - 2021",
  },
  {
    school: "Taras Shevchenko National University of Kyiv",
    degree: "Bachelor's degree, International Economics",
    location: "Kyiv, Ukraine",
    period: "2013 - 2017",
  },
];

function Education() {
  return (
    <section className="education-container" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="education-degree">{edu.degree}</h3>
            <div className="education-sub-header">
              <span className="education-school">{edu.school}</span>
              <span className="education-dot">•</span>
              <span className="education-meta">
                {edu.period} | {edu.location}
              </span>
            </div>

            {edu.grade && <div className="education-grade">{edu.grade}</div>}

            {edu.description ? (
              <ul className="education-description">
                {edu.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="education-highlights">{edu.highlights}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
