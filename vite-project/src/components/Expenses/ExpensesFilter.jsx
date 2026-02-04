import { useState, useEffect } from "react";
import "./ExpensesFilter.css";
import PropTypes from "prop-types";
import Expenses from "./Expense.jsx";

const ExpensesFilter = (props) => {
  // Expense Filter
  const [selectedYear, setSelectedYear] = useState("2024");

  //esimene render
  useEffect(() => {
    props.onChangeFilter(selectedYear);
  }, []);
  //onchange
  const changeHandler = (event) => {
    setSelectedYear(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={changeHandler}>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
