import "./App.css";
import Navbar from "./components/Navbar";
import LoginModal from "./components/UI/Modals/LogInModal";
import useToggle from "./hooks/useToggle";
import SignupModal from "./components/UI/Modals/SignupModal";
import QuizProvider from "./store/QuizProvider";
import QuizList from "./components/UI/Quiz/QuizList";
import Quiz from "./components/UI/Quiz/Quiz";
import Review from "./components/UI/Quiz/Review";
import Form from "./components/Add/Form";
import AddQuiz from "./components/Add/AddQuiz";

function App() {
  const [loginIsOpen, setLoginIsOpen] = useToggle(false);
  const [signupIsOpen, setSignupIsOpen] = useToggle(false);

  // const { name, isAdmin, addUser, loginHandler, users } =
  //   useContext(UserContext);

  return (
    <div>
      <Navbar onLoginOpen={setLoginIsOpen} onSignupOpen={setSignupIsOpen} />
      {loginIsOpen && <LoginModal onClose={setLoginIsOpen} />}
      {signupIsOpen && <SignupModal onClose={setSignupIsOpen} />}
      <main>
        <QuizProvider>
          {/* <QuizList />
          <Quiz />
          <Review /> */}
          <AddQuiz />
        </QuizProvider>
      </main>
      {/* {name}
      {isAdmin + ""}
      {users.map((user) => {
        return (
          <h2 key={user.name}>
            {user.name} {user.password}
          </h2>
        );
      })} */}
    </div>
  );
}

export default App;
