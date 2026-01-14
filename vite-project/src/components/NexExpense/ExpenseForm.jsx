import "./ExpenseForm.css";

function ExpenseForm(props) {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min={0.01} step={0.01} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min={2024 - 11 - 12} max={2027 - 1 - 31} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
