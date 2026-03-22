import './ExpenseItem.css';

function ExpenseItem({ date, title, amount }) {
  const formattedDate = {
    month: date.toLocaleString('en-US', { month: 'long' }),
    day: date.toLocaleString('en-US', { day: '2-digit' }),
    year: date.getFullYear(),
  };

  return (
    <div className="expense-item">
      <div>
        <div>{formattedDate.month}</div>
        <div>{formattedDate.day}</div>
        <div>{formattedDate.year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          ${amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
