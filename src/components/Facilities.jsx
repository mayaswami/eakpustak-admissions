import { facilities } from "../data/facilities";
import "./Facilities.css";

function Facilities() {
  return (
    <section id="facilities" className="facilities">
      <div className="section-header">
        <p className="eyebrow">CAMPUS & FACILITIES</p>
        <h2>Spaces built for learning, play and care</h2>
        <p className="section-intro">
          Thoughtfully designed spaces, maintained by trained staff every day.
        </p>
      </div>

      <ul className="facilities-grid">
        {facilities.map((item) => (
          <li key={item.id} className="facility-card">
            <span className="facility-card__category">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Facilities;