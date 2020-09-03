import React, {useContext}  from 'react'
import {GlobalContext} from '../context/GlobalState';
import ExpenseTransactions from './ExpenseTransactions'

const ExpenseList = () => {
    const {expenseTransactions} = useContext(GlobalContext);

    if(expenseTransactions) {
        return (
            // <div className='transactions transactions-expense'>
            //     <h2>Transaction History</h2>
            //     <ul className="transaction-list">
            //     {expenseTransactions.map(expenseTransaction => 
            //             (
            //           <ExpenseTransactions key={expenseTransaction._id} expenseTransaction = {expenseTransaction}/>
            //         )
            //             )}
    
            //     </ul>
            // </div>

<div className="ui middle aligned divided relaxed list">
<h2>Expense History</h2>
{expenseTransactions.map(expenseTransaction => 
                        (
                      <ExpenseTransactions key={expenseTransaction._id} expenseTransaction = {expenseTransaction}/>
                    )
                        )}
</div>
        )
    } else {
        return <h1> </h1>
    }
    
}

export default ExpenseList
