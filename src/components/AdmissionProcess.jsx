import { admissionSteps } from "../data/admissionSteps";
import "./AdmissionProcess.css";

function AdmissionProcess() {
  return (
    <section id="admission-process" className="admission">
      <div className="section-header">
        <p className="eyebrow">ADMISSION PROCESS</p>
        <h2>Five simple steps to join EAK</h2>
        <p className="section-intro">
          From first enquiry to a confirmed seat, our admissions team guides you
          through every step.
        </p>
      </div>

      <ol className="steps">
        {admissionSteps.map((step, index) => (
          <li key={step.id} className="step">
            <span className="step__number" aria-hidden="true">
              {index + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>

      <a href="#enquiry" className="button-primary admission__cta">
        Start your enquiry <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

export default AdmissionProcess;
