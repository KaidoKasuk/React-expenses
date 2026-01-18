import Expenses from "./components/Expense.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import "./components/NewExpense/NewExpense.css";
import expenses from "./components/Expense.jsx"; //andmed seal

function App() {
  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };
  return (
    <>
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler} />

        <Expenses expenses={expenses} />
      </div>
    </>
  );
}

export default App;
