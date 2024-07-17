import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick} type={props.type}>
      {props.label}
    </button>
  );
};

export default Button;
