import ExpenseItem from "./ExpenseItem.jsx";
import "./Expense.css";
import Card from "../../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import { useState } from "react";
import ExpenseList from "./ExpensesList.jsx";
const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState("2024");

  // console.log("year data in Expense.jsx" + filteredExpenses);
  //sissetulev year
  const filterChangeHandler = (year) => {
    console.log(`year is ${year}`);
    setFilteredExpenses(year);
  };

  const filteredYear = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredExpenses;
  });

  console.log(filteredYear);
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseList
        expenses={filteredYear}
        isLoading={props.isLoading}
      ></ExpenseList>
    </Card>
  );
};
export default Expenses;
