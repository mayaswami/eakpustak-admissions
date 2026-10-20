import "./FinalCta.css";

function FinalCta() {
  return (
    <section id="final-cta" className="final-cta">
      <div className="final-cta__inner">
        <p className="eyebrow">ADMISSIONS OPEN · 2027–28</p>
        <h2>Give your child a future-ready education.</h2>
        <p className="final-cta__intro">
          Seats are limited in every grade. Start your enquiry today, and our
          team will guide you through each step.
        </p>

        <div className="final-cta__actions">
          <a href="#enquiry" className="button-primary">
            Apply Now <span aria-hidden="true">↗</span>
          </a>
          <a href="#enquiry" className="button-secondary">
            Book a Campus Visit <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+919800012345" className="button-secondary">
            Talk to Our Admissions Team
          </a>
        </div>

        <p className="final-cta__phone">
          Or call +91 98000 12345, Monday to Saturday, 9 AM to 3 PM.
        </p>
      </div>
    </section>
  );
}

export default FinalCta;
