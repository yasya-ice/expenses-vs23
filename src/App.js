import{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';;

const App = () => {
  const DYMMY_EXPENSES = [ 
    { 
      id: 'id1',
      date: new Date(2025, 0, 10),
      title:'New book',
      amount: 30.99
    },
   {
    id: 'id2',  
    date: new Date(2024, 0, 5),
      title:'New jeans',
      amount: 99.99
   },
   {
    id: 'id3',  
    date: new Date(2024, 0, 5),
      title:'New bag',
      amount: 140.99
   }
]
const [expenses, setExpenses] = useState(() => {

    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];
  })
  
const addExpenseHandler = (expense) => {
  setExpenses((previousExpenses) => {
    console.log(expense)
    return [expense, ...previousExpenses]
  })
  console.log(expenses)
}  
return (
  <div className="App">
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     <Expenses expenses={DYMMY_EXPENSES} />
  </div>
  );
}
export default App;