import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://via.placeholder.com/350"
            alt="Profile"
          />
        </div>

        <div className="about-content">
          <h4>About Me</h4>

          <h1>I'm Isha Urkude</h1>

          <h3>Frontend & React Developer</h3>

          <p>
            I am a passionate developer and Data Science student.
            I enjoy building modern, responsive, and user-friendly
            websites using HTML, CSS, JavaScript, and React. I am
            continuously learning new technologies to improve my
            skills and create innovative web applications.
          </p>

          <div className="about-info">
            <p><strong>Name:</strong> Isha Urkude</p>
            <p><strong>Education:</strong> Data Science</p>
            <p><strong>Location:</strong> India</p>
            <p><strong>Email:</strong> <email>isha.urkude416@gmail.com</email></p>
          </div>

          <button className="about-btn">
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;