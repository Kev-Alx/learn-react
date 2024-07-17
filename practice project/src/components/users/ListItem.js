import styles from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={styles["list-item"]}>
      <p>{props.data.name}</p>
      <p>Age (in years): {props.data.age}</p>
    </div>
  );
};

export default ListItem;
