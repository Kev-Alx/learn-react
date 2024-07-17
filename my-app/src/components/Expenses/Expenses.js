import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(year);
  });
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter onFilterChange={filterChangeHandler} selected={year} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expense={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
