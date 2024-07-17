import QuizContext from "./quiz-context";
import Quiz from "./Questions";
import { useReducer } from "react";

const ACTIONS = {
  NEXT: "next",
  PREVIOUS: "prev",
  START: "start",
  ANSWER: "answer",
  SUBMIT: "submit",
};

const quizReducer = (state, action) => {
  if (action.type === ACTIONS.START) {
    const quiz = state.quizList.find((quiz) => {
      return quiz.id === action.id;
    });
    quiz.questions.forEach((question) => {
      question.isAnswered = false;
    });
    return {
      ...state,
      activeQuiz: quiz,
      activeQuestion: state.quizList[0].questions[0],
      activeIndex: 1,
    };
  }
  if (action.type === ACTIONS.NEXT) {
    const quiz = state.quizList.find((quiz) => {
      return quiz.id === state.activeQuiz.id;
    });

    const questionIndex = quiz.questions.findIndex(
      (question) => question.question === state.activeQuestion.question
    );
    if (questionIndex > quiz.questions.length - 2) return state;

    return {
      ...state,
      activeQuestion: quiz.questions[questionIndex + 1],
      activeIndex: state.activeIndex + 1,
    };
  }
  if (action.type === ACTIONS.PREVIOUS) {
    const quiz = state.quizList.find((quiz) => {
      return quiz.id === state.activeQuiz.id;
    });

    const questionIndex = quiz.questions.findIndex(
      (question) => question.question === state.activeQuestion.question
    );
    if (questionIndex < 1) return state;
    return {
      ...state,
      activeQuestion: quiz.questions[questionIndex - 1],
      activeIndex: state.activeIndex - 1,
    };
  }
  if (action.type === ACTIONS.ANSWER) {
    const isDone = state.activeQuiz?.questions.every((question) => {
      return question.isAnswered === true;
    });
    return {
      ...state,
      activeQuestion: state.activeQuestion.answerQuestion(action.aIdx),
      activeQuiz: { ...state.activeQuiz, isDone: isDone },
    };
  }
  if (action.type === ACTIONS.SUBMIT) {
    return {
      ...state,
      isSubmitted: true,
    };
  }
  return state;
};

const QuizProvider = ({ children }) => {
  const [active, dispatchActive] = useReducer(quizReducer, {
    quizList: [Quiz],
    activeQuiz: undefined,
    activeQuestion: undefined,
    activeIndex: 1,
  });

  const startQuiz = (quizId) => {
    dispatchActive({ type: ACTIONS.START, id: quizId });
  };

  const nextQuestion = () => {
    dispatchActive({ type: ACTIONS.NEXT });
  };

  const prevQuestion = () => {
    dispatchActive({ type: ACTIONS.PREVIOUS });
  };

  const answerQuestion = (answerIndex) => {
    dispatchActive({ type: ACTIONS.ANSWER, aIdx: answerIndex });
  };

  const submitQuiz = () => {
    dispatchActive({ type: ACTIONS.SUBMIT });
  };

  const QuizContextValue = {
    ...active,
    startQuiz,
    nextQuestion,
    prevQuestion,
    answerQuestion,
    submitQuiz,
  };
  return (
    <QuizContext.Provider value={QuizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
