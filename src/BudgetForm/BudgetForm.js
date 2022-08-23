import { useState } from 'react';
import '../index.css'
function BudgetForm() {
  const totalIncome = 115000
  const federalTaxRate = 24
  const jerseyTaxRate = 6.625

  const afterTax = 77325
  const afterTaxMonthly = afterTax / 12
  const afterTaxWeekly = afterTaxMonthly / 4
  const afterTaxDaily = afterTaxWeekly / 5
  const afterTaxHourly = afterTaxDaily / 8
  const monthlyCost = 3500
  const rent = monthlyCost * 12




  const [income, setIncome] = useState(`$${totalIncome}` )
  const [federalTax, setFederalTax] = useState(`${federalTaxRate}%`)
  const [stateTax, setStateTax] = useState(`${jerseyTaxRate}%`)

  return (
    <div className="budgetFormOuterDiv">
      <h1>Budget Form</h1>
      <div className="budgetFormInnerDiv">
      <ul className="budgetUl">
        <li className="budgetLi">
          Total Income: {income}
        </li>
        <li className="budgetLi">
          Fed Tax: {federalTax} |
          Jersey Tax: {stateTax}
        </li>

        <li className="budgetLi">
          Monthly rent: ${monthlyCost} |
          Rent: ${rent}
        </li>
        <li className="budgetLi">
          After Tax and Rent: ${afterTax - rent}
        </li>
      </ul>
      <ul className="afterTaxUl">

        <li className="budgetLi">
          After Tax Monthly: {afterTaxMonthly}
        </li>
        <li className="budgetLi">
          Monthly rent: ${monthlyCost}
        </li>
        <li className="budgetLi">
          After Tax and Rent: ${afterTaxMonthly - monthlyCost}
        </li>

        {/* <li className="budgetLi">
          After Tax Weekly: {afterTaxWeekly}
        </li>
        <li className="budgetLi">
          After Tax Daily: {afterTaxDaily}
        </li>
        <li className="budgetLi">
          After Tax Daily: {afterTaxHourly}
        </li> */}
      </ul>

      <table className="expensesTable">
  <tr>
    <th>Expense</th>
    <th>Cost</th>
    <th>Month Total</th>
  </tr>
  <tr>
    <td>Groceries</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Dinners</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Partying</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Transportation</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Travel</td>
    <td></td>
    <td></td>
  </tr>

</table>
      </div>
    </div>
  );
}

export default BudgetForm;
