import {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, amount: 1500, description: "Salary" },
        { id: 2, amount: -180, description: "Supermarket" },
        { id: 3, amount: 150, description: "Cash" }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
