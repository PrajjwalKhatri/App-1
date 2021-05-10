import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");

  const onFilterYear = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.split("-")[0] === filterYear;
  });

  let noItemsFound = (
    <h3 style={{ color: "white", textAlign: "center" }}>
      No Items Found For {filterYear}
    </h3>
  );

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter onFilterYear={onFilterYear} />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length !== 0? filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) : noItemsFound}
      </Card>
    </>
  );
}

export default Expenses;
