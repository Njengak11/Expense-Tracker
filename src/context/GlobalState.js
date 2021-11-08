import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState ={
    transactions: [ ]
}

// create context
 const GlobalContext = createContext(initialState);


//provider component
export const GlobalProvider = ({ children }) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    // Actions 

    function addTransaction(transaction) {
      dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
      });
    }

    function deleteTransaction(id) {
      dispatch({
        type:'DELETE_TRANSACTION',
        payload: id
      });
    }

    
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    addTransaction,
    deleteTransaction
  }}>
    {children}
  </GlobalContext.Provider>);

}

export default GlobalContext;