import { highlights } from "../data/highlights";
import "./Highlights.css";

function Highlights() {
  return (
    <section id="highlights" className="highlights">
      <div className="highlights__inner">
        <p className="eyebrow">BY THE NUMBERS</p>
        <h2>Our school at a glance</h2>

        <ul className="highlights__grid">
          {highlights.map((item) => (
            <li key={item.id} className="highlights__item">
              <span className="highlights__value">{item.value}</span>
              <span className="highlights__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Highlights;
