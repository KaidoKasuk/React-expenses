// //imports
import ExpenseDate from "./ExpenseDate.jsx";
import "./ExpenseItem.css";
import Card from "../UI/Card.jsx";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenseData.title);

  const clickHandler = () => {
    console.log("click happened");
    setTitle(`Updated by click ${title}`);
    console.log(title);
  };

  return (
    //üks item
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />

      <div className="expense-item_description">
        <h2>{props.expenseData.title}</h2>
        <div className="expense-item_price">{props.expenseData.price}</div>
      </div>

      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}
export default ExpenseItem;
