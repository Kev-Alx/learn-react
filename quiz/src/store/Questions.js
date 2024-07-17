class Question {
  question;
  answerList;
  answer;
  isAnswered;
  isCorrect;

  constructor(question, answerList, answer) {
    this.question = question;
    this.answerList = answerList;
    this.answer = answer;
    this.isAnswered = false;
    this.isCorrect = false;
  }

  checkAnswer(choice) {
    return choice === this.answer;
  }

  answerQuestion(answerIndex) {
    this.isAnswered = true;
    if (answerIndex === this.answer) {
      this.isCorrect = true;
    }
    return this;
  }

  unanswerQuestion() {
    this.isAnswered = false;
    return this;
  }
}

class Quiz {
  questions = [
    new Question("What is 2 + 2", [1, 2, 3, 4], 3),
    new Question("What is 5 + 8", [13, 12, 14, 11], 0),
    new Question("What is 12 + 42", [41, 54, 43, 64], 1),
  ];
  name;
  id;
  isDone;

  constructor(name = "My Quiz", id = "default_id") {
    this.name = name;
    this.id = id;
    this.isDone = false;
  }

  addQuestion(question, answer, ...answerList) {
    this.questions.push(new Question(question, [...answerList], answer));
  }

  reset() {
    this.questions.forEach((question) => {
      question.unanswerQuestion();
    });
    this.score = 0;
  }
}

const quiz = new Quiz();

export default quiz;
