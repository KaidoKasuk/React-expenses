import ExpenseItem from "./ExpenseItem.jsx";
import "./Expense.css";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./Expenses/ExpensesFilter.jsx";
import { useState } from "react";

const Expenses = (props) => {
  //incoming year
  const filterChangeHandler = (year) => {
    console.log(`year is ${year}`);
  };

  props.expenses.map((expense) => {
    console.log(expense);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem expenseData={expense} key={expense.id}></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
