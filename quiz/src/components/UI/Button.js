import styles from "./Button.module.css";

const Button = ({ label, onClick, type, id, disabled }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={styles.btn}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
