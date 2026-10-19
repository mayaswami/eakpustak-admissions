import { documents } from "../data/documents";
import "./RequiredDocuments.css";

function RequiredDocuments() {
  return (
    <section id="documents" className="documents">
      <div className="section-header">
        <p className="eyebrow">REQUIRED DOCUMENTS</p>
        <h2>Keep these ready before you apply</h2>
        <p className="section-intro">
          Scanned copies are enough for the online form. Originals are verified
          at the time of assessment.
        </p>
      </div>

      <ul className="checklist">
        {documents.map((doc) => (
          <li key={doc.id} className="checklist__item">
            <span className="checklist__icon" aria-hidden="true">
              ✓
            </span>
            <div>
              <h3>{doc.title}</h3>
              <p>{doc.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RequiredDocuments;
