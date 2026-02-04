import Expenses from "./components/Expenses/Expense.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import "./components/NewExpense/NewExpense.css";
import { useState } from "react";
let dummyExpenses = [
  {
    id: "id1",
    date: new Date(2024, 10, 12),
    title: "new book",
    price: 30.99,
  },
  {
    id: "id2",
    date: new Date(2026, 0, 1),
    title: "new Jeans",
    price: 30.99,
  },
  {
    id: "id3",
    date: new Date(2026, 1, 1),
    title: "new Phone",
    price: 300.99,
  },
];

function App() {
  const [expenses, SetExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    SetExpenses((previousExpeses) => {
      return [expense, ...previousExpeses];
    });
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
