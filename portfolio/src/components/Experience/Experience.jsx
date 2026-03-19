import "./Experience.css";

const jobs = [
  {
    company: "KPMG Canada",
    role: "Senior ServiceNow Developer",
    period: "Oct 2023 - Present",
    location: "Toronto, Ontario",
    description: [
      "Develops JavaScript-based solutions to automate and optimize business processes.",
      "Builds and enhances front-end UI components using HTML, CSS, and JavaScript.",
      "Translates complex user requirements into scalable technical solutions.",
      "Collaborates in an Agile environment to deliver high-quality software."
    ]
  },
  {
    company: "KPMG Canada",
    role: "ServiceNow Developer",
    period: "Oct 2021 - Sep 2023",
    location: "Toronto, Ontario",
    description: [
      "Developed solutions using JavaScript to streamline internal business processes.",
      "Worked within an Agile methodology to ensure efficient project delivery."
    ]
  },
  {
    company: "HOOPP (Healthcare of Ontario Pension Plan)",
    role: "Systems Developer Co-op",
    period: "Sep 2020 - Apr 2021",
    location: "Toronto, Ontario",
    description: [
      "Implemented JavaScript solutions for internal systems to improve operations.",
      "Participated in the full SDLC including analysis, design, coding, and testing.",
      "Contributed to daily Scrum meetings and sprint planning."
    ]
  }
];

function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-title">Work Experience</h2>
      <div className="experience-list">
        {jobs.map((job, index) => (
          <div key={index} className="experience-item">
            <h3 className="experience-role">{job.role}</h3>
            <div className="experience-sub-header">
              <span className="experience-company">{job.company}</span>
              <span className="experience-dot">•</span>
              <span className="experience-meta">{job.period} | {job.location}</span>
            </div>
            <ul className="experience-description">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;