import { importantDates } from "../data/importantDates";
import "./ImportantDates.css";

function ImportantDates() {
  return (
    <section id="important-dates" className="dates">
      <div className="section-header">
        <p className="eyebrow">IMPORTANT DATES</p>
        <h2>Key dates for session 2027–28</h2>
        <p className="section-intro">
          Mark these dates in your calendar and apply early.
        </p>
      </div>

      <ol className="dates-list">
        {importantDates.map((item) => (
          <li key={item.id} className="date-card">
            <div className="date-card__date">
              <span className="date-card__day">{item.day}</span>
              <span className="date-card__month">
                {item.month} {item.year}
              </span>
            </div>
            <h3>{item.event}</h3>
            <p className="date-card__note">{item.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ImportantDates;
