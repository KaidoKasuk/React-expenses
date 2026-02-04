import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = (props) => {
  return (
    <>
      {props.expenses.length === 0 && (
        <p className="expenses-list__fallback">No Expenses found</p>
      )}
      <ul className="expenses-list">
        {props.expenses.length > 0 &&
          props.expenses.map((expense) => {
            return (
              <ExpenseItem expenseData={expense} key={expense.id}></ExpenseItem>
            );
          })}
      </ul>
    </>
  );
};

export default ExpenseList;
