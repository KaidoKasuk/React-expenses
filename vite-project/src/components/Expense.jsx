import ExpenseItem from "./ExpenseItem.jsx";
import "./Expense.css";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./Expenses/ExpensesFilter.jsx";
import { useState } from "react";

const Expenses = () => {
  //incoming year
  const filterChangeHandler = (year) => {
    console.log(`year is ${year}`);
  };
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: "new book",
      price: 30.99,
    },
    {
      date: new Date(2026, 0, 1),
      title: "new Jeans",
      price: 30.99,
    },
  ];

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpenseItem data={expenses[0]}></ExpenseItem>
      <ExpenseItem data={expenses[1]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;
