import PropTypes from "prop-types";

//hea tava BroCode jargi
ExpenseDate.propTypes = {
  month: PropTypes.string,
  day: PropTypes.number,
  year: PropTypes.number,
};

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <p className="expense-date__month"> {props.month}</p>
      <p className="expense-date__day">{props.day}</p>
      <p className="expense-date__year">{props.year}</p>
    </div>
  );
}

export default ExpenseDate;
