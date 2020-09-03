import React from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeTransactions = ({incomeTransaction}) => {

    //getting the function deleteTransaction from globalContext
    const {deleteTransaction} = React.useContext(GlobalContext);

    return (

        <div className="item">
  <div className="right floated content">
  <button className="delete-btn" onClick={()=> deleteTransaction("income", incomeTransaction._id)}>
            <i className="fas fa-trash-alt"></i>
        </button>
    </div>
    {/* <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
     */}
     <i className="dollar sign icon"></i>
    <div className="content">
      <h3 className="header">  {incomeTransaction.incomeText}</h3>
      <p className="description"> ${incomeTransaction.incomeAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </div>
  </div>
    //     <li className="transaction">
    //     <span className="transaction-text">
    //         {incomeTransaction.incomeText}
    //     </span>
    //     <span className="transaction-amount">
    //     ${incomeTransaction.incomeAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    //     </span> 
    //     <button className="delete-btn" onClick={()=> deleteTransaction("income", incomeTransaction._id)}>
    //         <i className="fas fa-trash-alt"></i>
    //     </button>
    // </li>
    )
}

export default IncomeTransactions
