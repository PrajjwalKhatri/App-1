import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props){

    const addNewExpense = (formData) => {
        props.onAddExpense(formData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddNewExpense={addNewExpense} />
        </div>
    )
}

export default NewExpense;