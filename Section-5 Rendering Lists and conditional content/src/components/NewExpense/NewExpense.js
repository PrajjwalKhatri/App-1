import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const addNewExpense = (formData) => {
    props.onAddExpense(formData);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm onAddNewExpense={addNewExpense} renderForm={setShowForm} />
      )}
    </div>
  );
}

export default NewExpense;
