import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({items}) => {
  const [selectedYear, setSelectedYear] = useState('');

  const onSelectYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={onSelectYear}/>
      {items.map(item => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </Card>
  );
}

export default Expenses;
