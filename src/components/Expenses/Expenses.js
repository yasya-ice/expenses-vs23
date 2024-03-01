import React, { useState } from "react"

import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from "../NewExpenses/ExpensesFilter"

const Expenses = (props) => {
  const filterChangeHandler = (filteredYear) => { 
      console.log('Year data in Expenses.js ' + filteredYear)
  }

    return (
        <Card className="expenses">
          <ExpensesFilter onChangeFilter={filterChangeHandler} />
        { 
          props.expenses.map((expense) =>{ 
              return <ExpenseItem expenseData={expense} key={expense.id}/>
          })
        }   
        </Card>
    )
}

export default Expenses