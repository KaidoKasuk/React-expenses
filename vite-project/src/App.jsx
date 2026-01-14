import Expenses from "./components/Expense.jsx";
import NewExpense from "./components/NexExpense/NewExpense.jsx";
import ExpenseForm from "./components/NexExpense/ExpenseForm.jsx";
import "./components/NexExpense/NewExpense.css";
function App() {
  return (
    <>
      <div className="new-expense">
        <ExpenseForm></ExpenseForm>
        <NewExpense></NewExpense>
        <Expenses></Expenses>
      </div>
    </>
  );
}

export default App;
