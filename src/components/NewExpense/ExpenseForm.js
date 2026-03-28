import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const inputChangeHandler = (fieldId, value) => {
    setExpenseData(prevState => ({
      ...prevState,
      [fieldId]: value,
    }));

    console.log(expenseData);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => inputChangeHandler('title', e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => inputChangeHandler('amount', e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
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
