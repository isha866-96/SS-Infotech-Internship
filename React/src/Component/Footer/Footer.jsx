import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Isha Portfolio</h2>
          <p>Frontend Developer | React Developer</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright 2026 Isha Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
