import "./Projects.css";

function Projects() {
  const projects = [
    "Portfolio Website",
    "React Gallery",
    "Responsive Landing Page",
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1>Projects</h1>
        <div className="page-grid">
          {projects.map((project) => (
            <article className="page-card" key={project}>
              <h2>{project}</h2>
              <p>
                A frontend project focused on layout, usability, and reusable
                component structure.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
