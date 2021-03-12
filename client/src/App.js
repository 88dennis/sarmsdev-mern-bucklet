import React from 'react';
// import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import {GlobalContextProvider} from './context/GlobalState';

import './App.css';

function App() {

  // function removeHistory(){
  //   localStorage.removeItem('incomeTransactions');
  //   localStorage.removeItem('expenseTransactions');
  //   window.location.reload();
  // }

  return (
    <GlobalContextProvider>
      <div className="my_container">    
        <div className="ui container segment">
      <div className="app-wrapper">
        {/* <Header /> */}
        <Balance />
        <AddTransaction />
        <IncomeList />
        <hr></hr>
        <ExpenseList />

    {/* <button onClick={removeHistory}>Clear history</button> */}

      </div>
    </div>
    </div>

    </GlobalContextProvider>
  );
}

export default App;
