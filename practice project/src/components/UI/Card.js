import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${styles.card} ${props["no-pad"] ? styles["no-pad"] : ""}
      ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
