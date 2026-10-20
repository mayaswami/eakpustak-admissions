import { feeStructure } from "../data/fees";
import "./FeeStructure.css";

const formatRupees = (amount) => `Rs. ${amount.toLocaleString("en-IN")}`;

function FeeStructure() {
  return (
    <section id="fees" className="fees">
      <div className="section-header">
        <p className="eyebrow">FEE STRUCTURE</p>
        <h2>Transparent fees, no surprises</h2>
        <p className="section-intro">
          Fees for session 2027–28. Figures are indicative and may be revised by
          the school.
        </p>
      </div>

      <div className="fees-table-wrap">
        <table className="fees-table">
          <caption>Annual and admission fees by grade range</caption>
          <thead>
            <tr>
              <th scope="col">Grade</th>
              <th scope="col">Annual fee</th>
              <th scope="col">Admission fee</th>
            </tr>
          </thead>
          <tbody>
            {feeStructure.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.grades}</th>
                <td>{formatRupees(row.annualFee)}</td>
                <td>{formatRupees(row.admissionFee)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="fees-note">
        Grade 9–12 covers both Secondary and Senior Secondary and shares one fee
        band. The admission fee is paid once, at the time of enrollment.
      </p>
    </section>
  );
}

export default FeeStructure;