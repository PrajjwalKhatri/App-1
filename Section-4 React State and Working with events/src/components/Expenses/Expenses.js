import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

  const [filterYear, setFilterYear] = useState("2019")

  const onFilterYear = (year) => {
    console.log(year)
    setFilterYear(year)
  }

  return (
    <>
      <Card className="expenses">
      <ExpenseFilter onFilterYear={onFilterYear} />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </>
  );
}

export default Expenses;
