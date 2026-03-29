import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filteredItems = items.filter(item => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  const onSelectYear = (year) => {
    setSelectedYear(year);
  };

  let expensesContent = <p>No expenses found.</p>;

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map(item => (
      <ExpenseItem key={item.id} {...item} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilter={onSelectYear} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
