import React, {useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {
    const {addIncome} = useContext(GlobalContext);
    const [ income, setIncome ] = useState({
        incomeText: "",
        incomeAmount: ""
    })
   const onChangeIncome =(e) => {
       //use the spread operator to get all the state
    setIncome({...income, [e.target.name] : e.target.value});
    console.log(income)
   }
   const onSubmitIncome = e => {
       e.preventDefault();
       //npm install uuid - for unique ids
       const newIncomeTransaction = {
           id: uuidv4(),
           incomeText: income.incomeText,
           incomeAmount: Number(income.incomeAmount),
       }
       console.log(newIncomeTransaction);
       addIncome(newIncomeTransaction);
       setIncome({
           incomeText: "",
           incomeAmount: ""
       });
   }

   const {addExpense} = useContext(GlobalContext);
   const [ expense, setExpense ] = useState({
       expenseText: "",
       expenseAmount: ""
   })
  const onChangeExpense =(e) => {
      //use the spread operator to get all the state
   setExpense({...expense, [e.target.name] : e.target.value});
   console.log(expense)
  }
  const onSubmitExpense = e => {
      e.preventDefault();
      //npm install uuid - for unique ids
      const newExpenseTransaction = {
          id: uuidv4(),
          expenseText: expense.expenseText,
          expenseAmount: Number(expense.expenseAmount),
      }
      console.log(newExpenseTransaction);
      addExpense(newExpenseTransaction);
      setExpense({
        expenseText: "",
        expenseAmount: ""
    });
  }

    return (
        <>
        <div className="form-wrapper">
        <form onSubmit={onSubmitIncome}>

<div className="ui formColor-income controlWidth-income segment">
  <div className="ui formColor-income form">
    <div className="two fields">
      <div className="field">
        <label htmlFor="incomeText">Income Note</label>
        <input
                     type="text"
                     name= "incomeText"
                     value={income.incomeText}
                     placeholder="Note on income"
                     autoComplete="off"
                     onChange={onChangeIncome}
                     />
      </div>
      <div className="field">
        <label htmlFor="incomeAmount">Income Amount</label>
        <input
                     type="number"
                     step="any"
                     name= "incomeAmount"
                     value={income.incomeAmount}
                     placeholder="Amount"
                     autoComplete="off"
                     onChange={onChangeIncome}
                     />
      </div>
    </div>
    <div className="inline field">
     
    </div>
    <input type = "submit" value="Submit Income"className="ui btnSubmit-income submit button"  />
  </div>
</div>
</form>
</div>


<br/>

<div className="form-wrapper">
        <form onSubmit={onSubmitExpense}>

<div className="ui formColor-expense controlWidth-expense segment">
  <div className="ui formColor-expense form">
    <div className="two fields">
      <div className="field">
        <label htmlFor="expenseText">Expense Note</label>
        <input
                     type="text"
                     name="expenseText"
                     value={expense.expenseText}

                     placeholder="Note on expense"
                     autoComplete="off"
                     onChange={onChangeExpense}

                     />
      </div>
      <div className="field">
        <label htmlFor="expenseAmount">Expense Amount</label>
        <input
                     type="number"
                     step="any"
                     name="expenseAmount"
                     value={expense.expenseAmount}
                     placeholder="Amount"
                     autoComplete="off"
                     onChange={onChangeExpense}
                     />
      </div>
    </div>
    <div className="inline field">
     
    </div>
    <input type = "submit" value="Submit Expense"className="ui btnSubmit-expense submit button"  />
  </div>
</div>
</form>
</div>





        {/* <div className="form-wrapper"> */}
            {/* <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input
                     type="text"
                     name= "incomeText"
                     value={income.incomeText}
                     placeholder="Add Income"
                     autoComplete="off"
                     onChange={onChangeIncome}
                     />
                    <input
                     type="number"
                     step="any"
                     name= "incomeAmount"
                     value={income.incomeAmount}
                     placeholder="Amount"
                     autoComplete="off"
                     onChange={onChangeIncome}
                     />
                     <input
                     type="submit"
                     value="submit"
                     />
                     
                </div>
            </form> */}
            {/* <form onSubmit ={onSubmitExpense}>
                <div className="input-group expense">
                    <input
                     type="text"
                     name="expenseText"
                     value={expense.expenseText}

                     placeholder="Add Expense"
                     autoComplete="off"
                     onChange={onChangeExpense}

                     />
                    <input
                     type="number"
                     step="any"
                     name="expenseAmount"
                     value={expense.expenseAmount}

                     placeholder="Amount"
                     autoComplete="off"
                     onChange={onChangeExpense}

                     />
                     <input
                     type="submit"
                     value="submit"
                     />
                     
                </div>
            </form> */}
        {/* </div> */}
        </>

    )
}

export default AddTransaction
