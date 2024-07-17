import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const cancelClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="new-expense">
        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add New Expense
          </button>
        )}
        {isOpen && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancelClick={cancelClickHandler}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
