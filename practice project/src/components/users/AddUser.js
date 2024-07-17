import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");

  const handleNameInput = (event) => {
    setName(event.target.value);
  };
  const handleAgeInput = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddUser(enteredName, enteredAge);
    setAge("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["add-user"]}>
      <label htmlFor="username">Username</label>
      <input
        value={enteredName}
        onChange={handleNameInput}
        id="username"
        type="text"
      />
      <label htmlFor="age">Age (Years)</label>
      <input
        value={enteredAge}
        onChange={handleAgeInput}
        id="age"
        type="number"
      />
      <Button type="submit" label="Add User" />
    </form>
  );
};

export default AddUser;
