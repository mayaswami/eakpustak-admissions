import { useState } from "react";
import { faqs } from "../data/faqs";
import "./Faq.css";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="faq">
      <div className="section-header">
        <p className="eyebrow">FREQUENTLY ASKED</p>
        <h2>Questions parents ask us</h2>
        <p className="section-intro">
          Can't find your answer here? Our admissions team is happy to help.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.id} className="faq-item">
              <h3 className="faq-item__heading">
                <button
                  type="button"
                  className="faq-item__button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>

              <div
                id={`faq-panel-${item.id}`}
                className="faq-item__panel"
                hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
