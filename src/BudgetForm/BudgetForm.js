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




  const [income, setIncome] = useState(`$${totalIncome}`)
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

        <div className="expensesTable">
          <div className="expensesTitle">
            <div className="expenseName" >Expense</div>
            <div className="expenseName">Cost</div>
            <div className="expenseName">Monthly</div>

          </div>
            <div classNAme="expensesTitl">
            <div className="expenseNam" >Expense</div>
            <div className="expenseNam">Cost</div>
            <div className="expenseNam">Monthly</div>
            </div>
        </div>

        <div className="toDo">
          <h1>To Do</h1>
          <h3>Fold Laundry and put in living room</h3>
          <h3>Clean Kitchen</h3>
          <h3>Empty Fridge</h3>
          <h3>Empty Fridge</h3>


        </div>

      </div>
    </div>
  );
}

export default BudgetForm;
