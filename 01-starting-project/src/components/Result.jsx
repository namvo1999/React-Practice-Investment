import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Results({userInput}) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment = 
    result[0].valueEndOfYear - 
    result[0].interest -
    result[0].annualInvestment;
  return <table id="result">
      <thead>
        <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interes</td>
            <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {result.map(yearData => {
            const totalInterested = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterested;
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterested)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
        })}
      </tbody>
  </table>;
}
