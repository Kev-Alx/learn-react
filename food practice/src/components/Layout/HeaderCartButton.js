import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const context = useContext(CartContext);
  const [btnisHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${styles.button} ${btnisHighlighted ? styles.bump : ""}`;
  useEffect(() => {
    if (context.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [context.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {context.items.reduce((acc, cur) => {
          return acc + cur.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
