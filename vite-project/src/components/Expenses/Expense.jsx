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
    setFilteredExpenses(year);
  };

  const filteredYear = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear() == filteredExpenses;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseList expenses={filteredYear}></ExpenseList>
    </Card>
  );
};
export default Expenses;
