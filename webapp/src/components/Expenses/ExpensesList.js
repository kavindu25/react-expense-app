import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpenseList = (props) => {
  if(props.items.length === 0) {
    return <h3 className="expenses-list__fallback">Found no expenses!</h3>
  };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
