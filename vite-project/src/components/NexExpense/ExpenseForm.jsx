import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: " ",
  //   enteredPrice: " ",
  //   enteredDate: " ",
  // });

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const PriceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    //et tühjendada peale saatmist väljad
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={PriceChangeHandler}
            value={enteredPrice}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={2024 - 11 - 12}
            max={2027 - 1 - 31}
            onChange={DateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
