import useInput from "../../../hooks/useInput";
import Modal from "./Modal";
import UserContext from "../../../store/user-context";
import { useContext, useRef } from "react";
import Button from "../Button";
import styles from "./LoginModal.module.css";

const LoginModal = ({ onClose }) => {
  const { loginHandler } = useContext(UserContext);
  const nameInputRef = useRef();
  const passInputRef = useRef();

  const {
    enteredValue: username,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: resetName,
    isValid: nameIsValid,
    hasError: nameHasError,
  } = useInput((value) => value.trim().length > 0);
  const {
    enteredValue: password,
    onChangeHandler: passChangeHandler,
    onBlurHandler: passBlurHandler,
    reset: resetPass,
    isValid: passIsValid,
    hasError: passHasError,
  } = useInput((value) => value.trim().length > 0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!nameIsValid || !passIsValid) {
      if (!nameIsValid) {
        nameInputRef.current.focus();
      } else {
        passInputRef.current.focus();
      }
      return;
    }
    const succcess = loginHandler(username, password);
    resetName();
    resetPass();
    if (succcess) {
      onClose();
    }
  };
  // console.log(nameHasError, passHasError);
  return (
    <Modal onClose={onClose}>
      <h1>Login</h1>
      <form onSubmit={submitHandler} className={`${styles.form}`}>
        <label htmlFor="name">Username</label>
        <input
          ref={nameInputRef}
          id="name"
          type="text"
          value={username}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          className={`${nameHasError && styles.invalid}`}
        />
        {nameHasError && <p>Please enter a valid username</p>}
        <label htmlFor="password">Password</label>
        <input
          ref={passInputRef}
          id="password"
          type="password"
          value={password}
          onChange={passChangeHandler}
          onBlur={passBlurHandler}
          className={`${passHasError && styles.invalid}`}
        />
        {passHasError && <p>Please enter a valid password</p>}
        <Button label="Login" type="submit" />
      </form>
    </Modal>
  );
};

export default LoginModal;
