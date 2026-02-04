import ExpenseItem from "./ExpenseItem.jsx";
import "./Expense.css";
import Card from "../../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import { useState } from "react";
import ExpenseList from "./ExpensesList.jsx";
const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  //sissetulev year
  const filterChangeHandler = (year) => {
    console.log(`year is ${year}`);

    const newArray = props.expenses.filter(
      (expense) => new Date(expense.date).getFullYear() == year,
    );
    setFilteredExpenses(newArray);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseList expenses={filteredExpenses}></ExpenseList>
    </Card>
  );
};
export default Expenses;
