import PropTypes, { func } from "prop-types";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";
import { useState } from "react";

function NewExpense(props) {
  const [editForm, setEditForm] = useState(false);
  //expenseDATA
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //peale andmete lisamist
    setEditForm(false);
  };
  //formTOGGLE
  const FormEditHandler = (state) => {
    setEditForm(state);
    console.log(editForm);
  };
  return (
    <div className="new-expense">
      {editForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onFormToggle={FormEditHandler}
        />
      )}
      {!editForm && <button onClick={FormEditHandler}>Add New Expense</button>}
    </div>
  );
}

export default NewExpense;
