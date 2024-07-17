import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e2",
    title: "House Insurance",
    amount: 1500.5,
    date: new Date(2021, 7, 28),
  },
  {
    id: "e3",
    title: "Food Insurance",
    amount: 145.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "School Insurance",
    amount: 300.67,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
