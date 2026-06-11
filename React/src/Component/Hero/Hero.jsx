import "./Hero.css";
import heroImg from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h3>Hello, I'm</h3>

        <h1>Isha Urkude</h1>

        <h2>Frontend & React Developer</h2>

        <p>
          I create modern, responsive, and user-friendly websites
          using HTML, CSS, JavaScript, and React.
        </p>

        <div className="hero-buttons">
          <button className="btn1">Hire Me</button>
          <button className="btn2">Download CV</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Hero" />
      </div>

    </section>
  );
}

export default Hero;
