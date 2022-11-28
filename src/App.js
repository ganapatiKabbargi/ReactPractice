import React from "react";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      location: "shop",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      location: "electronics",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      location: "insurance office",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      location: "woodshop",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Lets get started...</h2>
      {expenses.map((exp) => {
        return (
          <ExpenseItem
            title={exp.title}
            date={exp.date}
            location={exp.location}
            amount={exp.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
