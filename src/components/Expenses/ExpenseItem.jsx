import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // Created a new JS file for ExpenseDate. See for more info

  // Creating the onClick handler
  const clickHandler = () => {
    console.log('Click handler');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate {...props} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;