import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import IncomeTransactions from './IncomeTransactions'

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext);

    if(incomeTransactions) {
        return (
            
            // <div className='transactions transactions-income'>
            //     <h2>Transaction History</h2>
            //     <ul className="transaction-list">
            //         {incomeTransactions ? incomeTransactions.map(incomeTransaction => 
            //             (
            //           <IncomeTransactions key={incomeTransaction._id} incomeTransaction = {incomeTransaction}/>
            //         )
            //             ) : (<h2>Loading....</h2>)}
            //     </ul>
            // </div>
            
            <div className="ui middle aligned divided relaxed list">
                <h2>Income History</h2>
            {incomeTransactions ? incomeTransactions.map(incomeTransaction => 
                        (
                      <IncomeTransactions key={incomeTransaction._id} incomeTransaction = {incomeTransaction}/>
                    )
                        ) : (<h2>Loading....</h2>)}
</div>
            
        )
    } else {
        return <h1> </h1>
    }
    
}

export default IncomeList
