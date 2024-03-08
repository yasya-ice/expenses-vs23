import { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
      const [filteredYear, setFilteredYear] = useState('2023')
      const filterChangeHandler = (filteredYear) => {
            setFilteredYear(filteredYear);
      }
      const filteredExpenses = props.expenses.filter((expense) => {
            return expense.date.getFullYear() == filteredYear;
          })
          
      props.expenses.map((expense) => {
      })
     
      return (
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
           </Card>
    ) 
} 
export default Expenses;