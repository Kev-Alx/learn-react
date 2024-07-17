import { useReducer } from "react";
import Button from "../UI/Button";
import styles from "./Form.module.css";

const ACTIONS = {
  QUESTION_BLUR: "qblur",
  CHOICE_1_BLUR: "1blur",
  CHOICE_2_BLUR: "2blur",
  CHOICE_3_BLUR: "3blur",
  CHOICE_4_BLUR: "4blur",
  CORRECT_IDX: "correctIdx",
};

const inputReducer = (state, action) => {
  if (action.type === ACTIONS.QUESTION_BLUR) {
  }
  if (action.type === ACTIONS.CHOICE_1_BLUR) {
  }
  if (action.type === ACTIONS.CHOICE_2_BLUR) {
  }
  if (action.type === ACTIONS.CHOICE_3_BLUR) {
  }
  if (action.type === ACTIONS.CHOICE_4_BLUR) {
  }
  if (action.type === ACTIONS.CORRECT_IDX) {
  }
  return state;
};

const QForm = ({ formId = 0, onAdd, onDelete }) => {
  const [inputs, dispatchInput] = useReducer(inputReducer, {
    questionValue: "",
    choice1Value: "",
    choice2Value: "",
    choice3Value: "",
    choice4Value: "",
    correctIdx: 0,
  });
  console.log("form " + formId);

  return (
    <div className={styles.form}>
      <main>
        <header>
          <input
            type="text"
            placeholder="Question"
            className={styles.question}
          />
        </header>
        <li>
          <input type="radio" name={"name" + formId} />
          <input type="text" placeholder="Choice 1" />
        </li>
        <li>
          <input type="radio" name={"name" + formId} />
          <input type="text" placeholder="Choice 2" />
        </li>
        <li>
          <input type="radio" name={"name" + formId} />
          <input type="text" placeholder="Choice 3" />
        </li>
        <li>
          <input type="radio" name={"name" + formId} />
          <input type="text" placeholder="Choice 4" />
        </li>
      </main>
      <section>
        <Button label="Delete" onClick={onDelete} />
        <Button label="Add Below" onClick={onAdd} />
      </section>
    </div>
  );
};

export default QForm;
