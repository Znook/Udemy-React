import React, { useState } from "react";
// imports below
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // Created a new JS file for ExpenseDate. See ExpenseDate to understand what it applies

  // useState is called here
  // We give useState 2 variables. One to that sets the title and another that stores what set the title
  const [title, setTitle] = useState(props.title);

  // Creating the onClick handler
  // Here we allow our users to change the title with the setTitle property
  // This is then passed into the onClick
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate {...props} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
