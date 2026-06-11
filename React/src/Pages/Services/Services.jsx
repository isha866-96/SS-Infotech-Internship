import "./Services.css";

function Services() {
  const services = [
    "Responsive website design",
    "React single page apps",
    "Frontend UI development",
    "Portfolio and landing pages",
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1>Services</h1>
        <div className="page-grid">
          {services.map((service) => (
            <article className="page-card" key={service}>
              <h2>{service}</h2>
              <p>
                Clean, modern interfaces built with reusable React components
                and responsive CSS.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
