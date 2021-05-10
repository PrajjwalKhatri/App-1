import { useState } from "react"
import "./App.css"
import UserForm from "./Components/NewUser/UserForm"
import UserList from "./Components/UserList/UserList"

function App(){

    const [userList, setUserList] = useState([])

    const addNewUser = user => setUserList((oldUsers) => [user, ...oldUsers])

    return (
        <div className="root">
            <UserForm onAddNewUser={addNewUser} />
            <UserList users={userList} />
        </div>
    )
}

export default App;