import { programs } from "../data/programs";
import "./Programs.css";

function Programs() {
  return (
    <section id="academics" className="programs">
      <div className="section-header">
        <p className="eyebrow">ACADEMIC PROGRAMS</p>
        <h2>Four levels, one continuous journey</h2>
        <p className="section-intro">
          From first steps in Grade 1 to board examinations in Grade 12, each
          level builds on the last.
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((program) => (
          <article key={program.id} className="program-card">
            <p className="program-card__classes">{program.classes}</p>
            <h3>{program.level}</h3>
            <p className="program-card__age">{program.ages}</p>
            <p className="program-card__desc">{program.description}</p>

            <ul className="program-card__features">
              {program.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Programs;
