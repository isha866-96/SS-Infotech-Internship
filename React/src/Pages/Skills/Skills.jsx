import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Git"];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1>Skills</h1>
        <div className="tag-list">
          {skills.map((skill) => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
