import { differentiators } from "../data/whyChoose";
import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section id="about" className="why-choose">
      <div className="section-header">
        <p className="eyebrow">WHY EAK</p>
        <h2>Why parents choose us</h2>
        <p className="section-intro">
          Six reasons families trust EAK with their child's education.
        </p>
      </div>

      <ul className="why-grid">
        {differentiators.map((item, index) => (
          <li key={item.id} className="why-card">
            <span className="why-card__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChoose;
