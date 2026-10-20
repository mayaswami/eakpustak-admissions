import { testimonials } from "../data/testimonials";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header">
        <p className="eyebrow">PARENT VOICES</p>
        <h2>What families say about EAK</h2>
        <p className="section-intro">
          Honest experiences from parents whose children study with us today.
        </p>
      </div>

      <ul className="testimonials-grid">
        {testimonials.map((item) => (
          <li key={item.id}>
            <figure className="testimonial">
              <span className="testimonial__mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <span className="testimonial__name">{item.name}</span>
                <span className="testimonial__relation">{item.relation}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;