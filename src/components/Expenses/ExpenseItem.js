import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'


    const ExpenseItem = (props) => {
        const [title, settitle] = useState(props.expenseData.title)

        const clickHandler = () => {
            settitle('Updated!')
            console.log(title)
        } 
    return (
        
        <div className=' expense-item'>
            <ExpenseDate date={props.expenseData.date}/> 

            <div className='expense-item__description'>
                <h2> {props.expenseData.title}</h2>
                <div className='expense-item__price'> 
                    {props.expenseData.price} £ </div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </div>
        )
}

export default ExpenseItem