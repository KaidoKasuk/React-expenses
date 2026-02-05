//imports
import PropTypes from "prop-types";
import "./ExpenseDate.css";

//hea tava BroCode jargi
ExpenseDate.propTypes = {
  month: PropTypes.string,
  day: PropTypes.number,
  year: PropTypes.number,
};
//ühe itemi kuupäev
function ExpenseDate(props) {
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className="expense-date">
      <p className="expense-date__month"> {month}</p>
      <p className="expense-date__day">{day}</p>
      <p className="expense-date__year">{year}</p>
    </div>
  );
}

export default ExpenseDate;
