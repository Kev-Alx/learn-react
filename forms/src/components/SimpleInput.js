import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //Name input using a custoom hook while email not using a hook
  //Just for comparison purposes
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEnteredEmail] = useState("");
  //Additional toucched state to check if user has touched the submit button for the first time or not.
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim().includes("@");
  //User have to touch the submit button at least once to make this boolean can be T/F
  const emailInputIsInvalid = !enteredEmailIsValid && emailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  // console.log(nameInputHasError);
  // useEffect(() => {
  //   if (enteredNameIsValid && enteredEmailIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid, enteredEmailIsValid]);

  const emailInputChangehandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    resetNameInput();
    setEnteredEmail("");
    setEmailTouched(false);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={`form-control ${emailInputIsInvalid && "invalid"}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangehandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
