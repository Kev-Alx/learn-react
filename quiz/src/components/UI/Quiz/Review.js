import Button from "../Button";
import styles from "./Review.module.css";
import { useContext } from "react";
import QuizContext from "../../../store/quiz-context";

const Review = () => {
  const { activeQuiz, isSubmitted, startQuiz } = useContext(QuizContext);

  const numberOfCorrect = activeQuiz?.questions.filter((question) => {
    return question.isCorrect === true;
  }).length;

  const numberOfWrong = activeQuiz?.questions.length - numberOfCorrect;

  return (
    <>
      {activeQuiz?.isDone && activeQuiz && isSubmitted && (
        <section className={styles.review}>
          <h1>You got</h1>
          <div>
            <span>{numberOfCorrect}</span>
            <p> Correct</p>
          </div>
          <div>
            <span>{numberOfWrong}</span>
            <p> Wrong</p>
          </div>
          <Button
            label="Try again"
            onClick={startQuiz.bind(null, activeQuiz.id)}
          />
          <Button label="Do another one" />
        </section>
      )}
    </>
  );
};

export default Review;
