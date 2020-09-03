import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'


// const initialState = {
//     incomeTransactions : [
//         { id:1, incomeText: "car sold", incomeAmount: 15000},
//         { id:2, incomeText: "Salary", incomeAmount: 5000},
//         { id:3, incomeText: "Bonus", incomeAmount: 12000},    
//     ],
//     expenseTransactions :[
//            { id:4, expenseText: "rent", expenseAmount: 1000},
//         { id:5, expenseText: "Bank", expenseAmount: 2000},
//         { id:6, expenseText: "clothes", expenseAmount: 500},    
//     ]
// }






// const initialState = {
//     incomeTransactions : JSON.parse(localStorage.getItem('incomeTransactions')) || [],
//     expenseTransactions : JSON.parse(localStorage.getItem('expenseTransactions')) || [],
// }


const initialState = {
    incomeTransactions : [],
    expenseTransactions : [],
    loading: true,
    message:"",
}


//context is to pass in data to components instead of using props
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {

    //REDUCER - state management; sets the state using switch
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

useEffect(()=> {

   async function getIncome() {
    await axios.get('/api/incomeTransactions')
    .then(response => {
        console.log(response.data)
       dispatch({ type: 'FETCH_INCOME', payload: response.data})
    }).catch(error => {
        console.log(error)
        dispatch({type: 'FETCH_ERROR'})
    })
    }
   
    async function getExpenses() {
        await axios.get('/api/expenseTransactions')
        .then(response => {
            console.log(response.data)
           dispatch({ type: 'FETCH_EXPENSES', payload: response.data})
        }).catch(error => {
            console.log(error)
            dispatch({type: 'FETCH_ERROR'})
        })
    }

    getIncome();
    getExpenses()

    return () => {
        console.log("unmounting")
    }
      
}, [])


    // useEffect(()=> {
    //     localStorage.setItem("incomeTransactions", JSON.stringify(state.incomeTransactions));
    //     localStorage.setItem("expenseTransactions", JSON.stringify(state.expenseTransactions));
    // });

    //CREATE A DISPATCH FUNCTION
    const addIncome = (incomeTransaction) => {

            axios.post('/addIncome', incomeTransaction).then((response)=>{
                console.log(response.data)
                console.log("Added Successfully")

                dispatch({
                    type: "ADD_INCOME",
                    // payload: incomeTransaction
                    payload: response.data

                })
            }).catch((error) => {
                console.log("error", error)
            })
    }

    const addExpense = (expenseTransaction) => {
console.log('asdoasoiasdfoansfdnasdf', expenseTransaction)
        axios.post('/addExpense', expenseTransaction).then((response)=>{
            
            console.log(response.data)
            console.log("Added Successfully")
            dispatch({
                type: "ADD_EXPENSE",
                payload: response.data
            })
        }).catch((error) => {
            console.log("error", error)
        })
    }

    const deleteTransaction = async (trans, id) => {
        let uri;
        if(trans === "expense") {
            uri = "/deleteExpense/" +id;
        } else if (trans === "income") {
            uri = "/deleteIncome/" +id;
        }
       await axios.delete(uri).then(()=>{
            // console.log(response.data)
            console.log("Deleted Successfully")
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })
        }).catch((error) => {
            console.log("error", error)
        })
      
    }

    console.log(state, "hello");

    return (
        <GlobalContext.Provider value={{
            incomeTransactions : state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

