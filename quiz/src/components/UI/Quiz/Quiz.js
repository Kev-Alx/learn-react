import { useContext, useState } from "react";
import QuizContext from "../../../store/quiz-context";
import Button from "../Button";
import styles from "./Quiz.module.css";

const Quiz = () => {
  const {
    activeQuiz,
    activeQuestion,
    nextQuestion,
    prevQuestion,
    activeIndex,
    answerQuestion,
    submitQuiz,
  } = useContext(QuizContext);

  const isLastQuestion = activeQuiz?.questions.length === activeIndex;

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const buttonSubmitHandler = (e) => {
    if (activeQuestion.isAnswered) return;
    // console.log(+e.target.id.substring(0, 1));
    answerQuestion(+e.target.id.substring(0, 1));
  };

  return (
    <>
      {activeQuiz && (
        <>
          <form className={styles.quiz} onSubmit={submitHandler}>
            <header>
              <h1>{activeQuestion.question}</h1>
              {activeQuestion.isAnswered && (
                <h2
                  className={
                    activeQuestion.isCorrect ? styles.correct : styles.wrong
                  }
                >
                  {activeQuestion.isCorrect ? "Correct!" : "Wrong!"}
                </h2>
              )}
            </header>
            {activeQuestion.answerList.map((answer, i) => {
              return (
                <Button
                  key={answer}
                  id={i + "answerBtn"}
                  label={answer}
                  type="submit"
                  onClick={buttonSubmitHandler}
                  disabled={activeQuestion.isAnswered}
                />
              );
            })}
            <p>
              Question {activeIndex} of {activeQuiz.questions.length}
            </p>
            <footer className={styles.footer}>
              <Button label="Previous Question" onClick={prevQuestion} />
              <Button label="Next Question" onClick={nextQuestion} />
              {isLastQuestion && (
                <Button
                  label="Finish quiz"
                  disabled={!activeQuiz.isDone}
                  onClick={submitQuiz}
                />
              )}
            </footer>
          </form>
        </>
      )}
    </>
  );
};

export default Quiz;
