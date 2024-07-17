import { useContext } from "react";
import QuizContext from "../../../store/quiz-context";
import Button from "../Button";
import styles from "./QuizList.module.css";

const QuizList = () => {
  const { quizList, startQuiz } = useContext(QuizContext);

  const startQuizHandler = (e) => {
    startQuiz(e.target.id);
  };

  return (
    <ul className={styles["quiz-list"]}>
      {quizList.map((quiz) => {
        return (
          <li key={quiz.id}>
            {quiz.name}
            <Button
              onClick={startQuizHandler}
              label="Play this quiz!"
              id={quiz.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default QuizList;
