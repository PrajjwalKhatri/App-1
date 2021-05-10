import Card from "../Card/Card";
import styles from "./UserList.module.css";

function UserList(props) {
  return (
    <Card>
      {props.users.length === 0 ? (
        <h2>No Users Found</h2>
      ) : (
        props.users.map((user, index) => {
          return (
            <div className={styles["user-container"]} key={index}>
              {user.userName} - {user.age} Years Old
            </div>
          );
        })
      )}
    </Card>
  );
}

export default UserList;
