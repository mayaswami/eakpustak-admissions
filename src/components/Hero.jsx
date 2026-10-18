import heroImage from "../assets/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          ADMISSIONS OPEN · 2027–28
        </p>

        <h1>
          A foundation for
          <br />
          <em>a remarkable</em>
          <br />
          future.
        </h1>

        <p className="hero-description">
          An education that nurtures curiosity, builds character, and prepares
          every child to thrive in a changing world.
        </p>

        <div className="hero-actions">
          <a href="#enquiry" className="button-primary">
            Apply Now <span aria-hidden="true">↗</span>
          </a>
          <a href="#enquiry" className="button-secondary">
            Schedule a Visit <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-note">
          <span>Thoughtfully taught.</span>
          <span>Confidently prepared.</span>
        </div>
      </div>

      <div className="hero-visual">
        <img src={heroImage} alt="Students learning together in a classroom" />

        <div className="image-caption">
          <span>01 — THE EAK EXPERIENCE</span>
          <span>Learning beyond limits.</span>
        </div>

        <div className="hero-stamp" aria-hidden="true">
          <span>LEARN</span>
          <span>GROW</span>
          <span>BELONG</span>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default Hero;
