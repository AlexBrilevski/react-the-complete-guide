import { calculateInvestmentResults, formatter } from '../util/investment';

export default function InvestmentResults({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  const initialInvestment = results[0].valueEndOfYear - results[0].annualInvestment - results[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          const {year, interest, valueEndOfYear, annualInvestment} = result;
          const totalInterest = valueEndOfYear - initialInvestment - annualInvestment * year;
          const totalAmountInvested = valueEndOfYear - totalInterest;

          return (
            <tr key={`${index}-${year}`} className="center">
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        }
        )}
      </tbody>
    </table>
  );
}
