import BudgetForm from './BudgetForm/BudgetForm';
import './index.css'
function App() {
  return (
    <div className="outerDiv">
      <h1>Budget</h1>
      <div className="innerDiv">
        <BudgetForm />
      </div>
    </div>
  );
}

export default App;
