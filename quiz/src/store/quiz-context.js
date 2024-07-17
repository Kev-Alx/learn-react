import React from "react";

const QuizContext = React.createContext({
  activeQuestion: {},
  quizList: [],
});

export default QuizContext;
