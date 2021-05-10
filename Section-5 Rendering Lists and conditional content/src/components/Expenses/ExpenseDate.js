import "./ExpenseDate.css"

function ExpenseDate(props) {
  const [year, month, day] = props.date.split("-")

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
