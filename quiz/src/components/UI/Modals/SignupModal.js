import useInput from "../../../hooks/useInput";
import Modal from "./Modal";
import UserContext from "../../../store/user-context";
import { useContext } from "react";
import Button from "../Button";
import styles from "./LoginModal.module.css";

const SignupModal = ({ onClose }) => {
  const { addUser } = useContext(UserContext);
  const {
    enteredValue: usernameX,
    onChangeHandler: nameChangeHandlerX,
    onBlurHandler: nameBlurHandlerX,
    reset: resetName,
    isValid: nameIsValid,
    hasError: nameXHasError,
  } = useInput((value) => value.trim().length > 0);
  const {
    enteredValue: passwordX,
    onChangeHandler: passChangeHandlerX,
    onBlurHandler: passBlurHandlerX,
    reset: resetPass,
    isValid: passIsValid,
    hasError: passXHasError,
  } = useInput((value) => value.trim().length > 0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!nameIsValid || !passIsValid) return;
    addUser({ name: usernameX, password: passwordX, isAdmin: false });
    resetName();
    resetPass();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h1>Sign up</h1>
      <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          type="text"
          value={usernameX}
          onChange={nameChangeHandlerX}
          onBlur={nameBlurHandlerX}
          className={`${nameXHasError && styles.invalid}`}
        />
        {nameXHasError && <p>Please enter a valid username</p>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={passwordX}
          onChange={passChangeHandlerX}
          onBlur={passBlurHandlerX}
          className={`${passXHasError && styles.invalid}`}
        />
        {passXHasError && <p>Please enter the correct password</p>}
        <Button label="Sign up" type="submit" />
      </form>
    </Modal>
  );
};

export default SignupModal;
