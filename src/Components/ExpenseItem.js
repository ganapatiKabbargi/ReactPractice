import React from "react";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  //   const date = new Date(2021, 2, 28);
  //   const title = "car insurance";
  //   const location = "insurance office";
  //   const amount = 200;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
