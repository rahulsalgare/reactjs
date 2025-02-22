import { formatter } from "../util/investment";

export default function Result({ result }) {
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>
              {formatter.format(
                row.valueEndOfYear -
                  row.annualInvestment * row.year -
                  initialInvestment
              )}
            </td>
            <td>
              {formatter.format(
                row.valueEndOfYear -
                  (row.valueEndOfYear -
                    row.annualInvestment * row.year -
                    initialInvestment)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
