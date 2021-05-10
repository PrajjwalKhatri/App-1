import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <>
      {props.error && (
        <div
          className={styles["error-popup-bg"]}
          onClick={() => props.onSetError("")}
        />
      )}
      {props.error && (
        <div className={styles["error-dialog"]}>
          <h2>{props.error}</h2>
          <button onClick={() => props.onSetError("")}>Close</button>
        </div>
      )}
    </>
  );
}

export default ErrorModal;
