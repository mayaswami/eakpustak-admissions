import { useState } from "react";
import { grades, enquiryTypes } from "../data/enquiry";
import "./EnquiryForm.css";

const initialForm = {
  parentName: "",
  phone: "",
  email: "",
  grade: "",
  enquiryType: "",
  message: "",
};

function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section id="enquiry" className="enquiry">
        <div className="enquiry__card enquiry__success" role="status">
          <h2>Thank you, {form.parentName}.</h2>
          <p>
            We have received your enquiry. Our admissions team will contact you
            on {form.phone} within one working day.
          </p>
          <button
            type="button"
            className="button-secondary enquiry__reset"
            onClick={handleReset}
          >
            Send another enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="enquiry">
      <div className="enquiry__card">
        <div className="section-header">
          <p className="eyebrow">ENQUIRE NOW</p>
          <h2>Tell us about your child</h2>
          <p className="section-intro">
            Fill in the form and our team will get back to you within one
            working day.
          </p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="parentName">Parent or guardian name</label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              autoComplete="name"
              value={form.parentName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              pattern="[0-9]{10}"
              title="Enter a 10-digit mobile number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="grade">Child's grade for 2027–28</label>
            <select
              id="grade"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a grade
              </option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--full">
            <label htmlFor="enquiryType">I am interested in</label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose one
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--full">
            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="button-primary enquiry-form__submit">
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;