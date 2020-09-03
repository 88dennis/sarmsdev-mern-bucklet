import React from 'react'
import { GlobalContext } from '../context/GlobalState'

const ExpenseTransactions = ({expenseTransaction}) => {

    //getting the function deleteTransaction from globalContext - destructuring
    const {deleteTransaction} = React.useContext(GlobalContext);
    return (

        <div className="item">
        <div className="right floated content">
        <button className="delete-btn" onClick={()=> deleteTransaction("income", expenseTransaction._id)}>
                  <i className="fas fa-trash-alt"></i>
              </button>
          </div>
          {/* <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
           */}
           <i className="shopping cart icon"></i>
          <div className="content">
            <h3 className="header">  {expenseTransaction.expenseText}</h3>
            <p className="description"> 
            ${expenseTransaction.expenseAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}   </p>
          </div>
        </div>


    //     <li className="transaction">
    //     <span className="transaction-text">
    //         {expenseTransaction.expenseText}
    //     </span>
    //     <span className="transaction-amount">
    //     ${expenseTransaction.expenseAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    //     </span>
    //     <button className="delete-btn" onClick= {()=>deleteTransaction("expense", expenseTransaction._id)}>
    //         <i className="fas fa-trash-alt"></i>
    //     </button>
    // </li>
    )
}

export default ExpenseTransactions
