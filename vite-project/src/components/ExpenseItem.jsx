// //imports
import ExpenseDate from "./ExpenseDate.jsx";
import "./ExpenseItem.css";
import Card from "../UI/Card.jsx";
function ExpenseItem(props) {
  return (
    //üks item
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />

      <div className="expense-item_description">
        <h2>{props.data.title}</h2>
        <div className="expense-item_price">{props.data.price}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
