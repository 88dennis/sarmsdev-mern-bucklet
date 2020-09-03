export default (state, action) => {
    switch(action.type) {
        case  "ADD_INCOME":
            // console.log(state, "FROM SWITCH")
            return {
                ...state, 
                // incomeTransactions :  [action.payload, ...state.incomeTransactions]
                incomeTransactions :  [action.payload].concat(state.incomeTransactions)
            }
        case  "ADD_EXPENSE":
            // console.log(state, "FROM SWITCH")
            return {
                ...state, 
                // incomeTransactions :  [action.payload, ...state.incomeTransactions]
                expenseTransactions :  [action.payload].concat(state.expenseTransactions)
            }
            case  "DELETE_TRANSACTION":
                // console.log(state, "FROM SWITCH")
                return {
                    ...state, 
                    incomeTransactions :  state.incomeTransactions.filter((incomeTransaction) => incomeTransaction._id !== action.payload),
                    expenseTransactions :  state.expenseTransactions.filter((expenseTransaction) => expenseTransaction._id !== action.payload),
                }

                case  "FETCH_INCOME":
                    // console.log(state, "FROM SWITCH")
                    return {
                        ...state, 
                        incomeTransactions : action.payload,
                        loading: false,
                        message: "success fetching income"
                    }
                    case  "FETCH_EXPENSES":
                        // console.log(state, "FROM SWITCH")
                        return {
                            ...state, 
                            expenseTransactions : action.payload,
                            loading: false,
                            message: "success fetching expenses"
                        }

                        case  "FETCH_ERROR":
                            // console.log(state, "FROM SWITCH")
                            return {
                                loading: true,
                                message: "error"
                            }
        default :
            return state;
    }

    
}