import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
        <ExpenseItem expenseData={props.expenses[0]}></ExpenseItem>
        <ExpenseItem expenseData={props.expenses[1]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
