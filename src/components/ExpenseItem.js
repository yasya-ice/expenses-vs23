import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props){
    
    const day = props-expenseData.date.toLocaleString
        ('en-US',{day: '2-digit'} )
    const month = props-expenseData.date
        toLocaleString('en-US',{month: 'long'} )
    const year = props-expenseData.date.getFullYear()

    return (
        <div className='expense-item'>
            <ExpenseDate
            date={props.expenseData.date} /> 

            <div className='expense-item_description'>
                <h2> {props.expenseData.title}</h2>
                <div className='expense-item_price'> 
                    {props.expenseData.price} </div>
            </div>
        </div>)
}

export default ExpenseItem