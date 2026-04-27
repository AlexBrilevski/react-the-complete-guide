import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense }) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const inputChangeHandler = (key, value) => {
    setExpenseData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    onSaveExpense({
      ...expenseData,
      amount: +expenseData.amount,
      date: new Date(expenseData.date),
    });
    setExpenseData({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseData.title}
            onChange={(e) => inputChangeHandler('title', e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseData.amount}
            onChange={(e) => inputChangeHandler('amount', e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={expenseData.date}
            onChange={(e) => inputChangeHandler('date', e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
