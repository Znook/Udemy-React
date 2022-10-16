import React, { useState } from "react";
// imports below
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // Created a new JS file for ExpenseDate. See for more info

  // useState is called here
  // We give useState 2 variables. One to that sets the title and another that stores what set to the title
  const [title, setTitle] = useState(props.title);


  // Creating the onClick handler
  const clickHandler = () => {
    // Here we allow our users to change the title with the setTitle property
    setTitle('Updated!');
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