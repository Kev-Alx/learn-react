import Card from "./Card";
import styles from "./Modal.module.css";
import Button from "./Button";

const Modal = (props) => {
  const closeHandler = () => {
    props.onClick();
  };

  return (
    <>
      <div className={styles.background} onClick={closeHandler}></div>
      <Card className={styles.modal}>
        <div>
          <h2>Invalid Input!</h2>
          <p>{props.message}</p>
          <Button onClick={closeHandler} label="Okay" />
        </div>
      </Card>
    </>
  );
};

export default Modal;
