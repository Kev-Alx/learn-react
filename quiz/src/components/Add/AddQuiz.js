import QForm from "./Form";
import { useState } from "react";
import styles from "./AddQuiz.module.css";
import Button from "../UI/Button";

const AddQuiz = () => {
  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState([<QForm onAdd={addComponent} />]);
  console.log("add " + index);

  function addComponent() {
    setIndex((prevIndex) => prevIndex + 1);
    setForms((prevForm) => [
      ...prevForm,
      <QForm formId={index} onAdd={addComponent} key={prevForm.length} />,
    ]);
  }

  return (
    <div className={styles.add}>
      <h1>Create a new Quiz!</h1>
      {forms.map((form, i) => {
        return <div key={i}>{form}</div>;
      })}
      <Button label="Done" />
    </div>
  );
};

export default AddQuiz;
