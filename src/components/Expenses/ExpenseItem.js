import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title: propsTitle, amount }) => {
  const [title, setTitle] = useState(propsTitle);
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <button onClick={() => setTitle('Updated')}>Change title</button>
        <div className="expense-item__price">
          ${amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
