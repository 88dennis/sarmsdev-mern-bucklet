import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {

    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);
 function timer() {
    setTimeout(()=> {
        window.location.reload();
      }, 3000)
 } 
    if (incomeTransactions && expenseTransactions) {
        const incomeAmounts = incomeTransactions.map((incomeTransaction)=> {
            return incomeTransaction.incomeAmount
        })
        
        const expenseAmounts = expenseTransactions.map((expenseTransaction)=> {
            return expenseTransaction.expenseAmount
        });
    
        const totalIncome = incomeAmounts.reduce((acc, item)=> (acc += item), 0).toFixed(2);
       
    
        const totalExpenses = expenseAmounts.reduce((acc, item)=> (acc += item), 0).toFixed(2);
        return (

            <>
            <div className="balance">

<div className="ui cards">
<div className="card">
    <div className="content">
      {/* <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
       */}
       <i className="right floated ui large money bill alternate outline icon"></i>
      <div className="header">
        Bucklet
      </div>
      <div className="meta">
        A Budget App
      </div>
      <div className="description">
       <h3>Balance: ${((totalIncome-totalExpenses).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button"><h4>Income: + ${totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></div>
        <div className="ui basic red button"><h4>Expenses: - ${totalExpenses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></div>
      </div>
    </div>
  </div>
  </div>
  </div>


{/* 

            <div className="balance">
               <div className="balance-wrapper"><h2>Balance</h2><h2>${((totalIncome-totalExpenses).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2></div> 
        
                <div className="income-expense">
                    <div className="plus">
                    <div className="balance-wrapper">
                        <h3>Income</h3>
                        <h3>+ ${totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                        </div>
                    </div>
                    <div className="minus">
                    <div className="balance-wrapper">
                        <h3>Expenses</h3>
                        <h3>- ${totalExpenses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                        </div>

                    </div>
                </div>
            </div> */}

            </>
        )
    } else {
        timer();
        return (<h1>Loading...</h1>)
    }
}

export default Balance
