import React from "react";
import "./App.css";
//import ExpenseItem from "./components/ExpenseItem";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

const  App = () => {
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible ';
  // document.getElementById('root').append(para);

  const expenses = [
    {
      id: "e1",
      title: "WireLess KeyBoard and Mouse",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2024, 1, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Get Started!"),
  //   React.createElement(Expenses,{items:expenses})
  // );

  return (
    <div className="App">
      <NewExpenses />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
