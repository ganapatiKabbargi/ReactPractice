import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const clickHandler = () => {};
  const deleteclickHandler = () => {};
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button className="expense-item__Ebutton" onClick={clickHandler}>
        Change title
      </button>
      <button className="expense-item__Dbutton" onClick={deleteclickHandler}>
        Delete Expense
      </button>
    </Card>
  );
};

export default ExpenseItem;
