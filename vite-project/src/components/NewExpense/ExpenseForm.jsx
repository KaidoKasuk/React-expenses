import { Fragment, useRef, useState } from "react";
import "./ExpenseForm.css";
import PropTypes from "prop-types";
import Error from "../../UI/Error.jsx";
function ExpenseForm(props) {
  const [error, setError] = useState(null);
  console.log(error);

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    event.preventDefault();

    if (
      enteredTitle.trim().length == 0 ||
      enteredPrice.trim().length == 0 ||
      enteredDate.trim().length == 0
    ) {
      setError({
        title: "Invalid Input",
        message:
          "Please Enter a valid title or amount or date (non empty values",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    titleInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };
  const FormEditHandler = (event) => {
    let state;
    state = false;
    props.onFormToggle(state);
  };

  return (
    <>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></Error>
      )}
      <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" id="title" ref={titleInputRef} />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                type="number"
                id="price"
                min={0.01}
                step={0.01}
                ref={amountInputRef}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                id="date"
                type="date"
                min={2024 - 11 - 12}
                max={2027 - 1 - 31}
                ref={dateInputRef}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button onClick={FormEditHandler} id="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ExpenseForm;
