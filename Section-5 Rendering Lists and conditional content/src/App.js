import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "1212",
      title: "Default",
      amount: "120",
      date: "2019-04-24",
    },
  ]);

  const addExpense = (newExpense) => setExpenses([newExpense, ...expenses]);

  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <Expenses
        expenses={expenses}
      />
    </>
  );
};

export default App;
