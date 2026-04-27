import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filteredItems = items.filter(item => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  const onSelectYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilter={onSelectYear} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
