import styles from "./Mavbar.module.css";
import Button from "./UI/Button";

const Navbar = ({ onLoginOpen, onSignupOpen }) => {
  return (
    <nav className={styles.navbar}>
      <h1>Qwiziz</h1>
      <div className={styles.side}>
        <Button label="Log In" onClick={onLoginOpen} />
        <Button label="Sign Up" onClick={onSignupOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
