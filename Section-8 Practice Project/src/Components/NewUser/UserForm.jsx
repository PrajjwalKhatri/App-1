import { useState } from "react";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from "./UserForm.module.css"

function UserForm(props) {

    const [userData, setUserData] = useState({
        userName: "",
        age: ""
    })

    const [error, setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(userData.userName.trim().length === 0 || userData.age.trim().length === 0){
            setError("All Fields Are Mandatory !!")
            return;
        }
        if(userData.age < 0){
            setError("Age Should Be Greater Than 0 ( Age > 0 ) !!")
            return;
        }
        props.onAddNewUser(userData)
        setUserData({
            userName: "",
            age: ""
        })
    }

    const handleUserName = e => setUserData((oldData) => { return { ...oldData, userName: e.target.value } })

    const handleAge = e => setUserData((oldData) => { return { ...oldData, age: e.target.value } })

    return (
        <>
        <Card>
            <form className={styles["user-form"]} onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" value={userData.userName} onChange={handleUserName} />
                <label>Age</label>
                <input type="number" value={userData.age} onChange={handleAge} />
                <button type="submit">Add New User</button>
            </form>
        </Card>
        <ErrorModal error={error} onSetError={setError} />
        </>
    )
}

export default UserForm;