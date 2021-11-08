import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalState';

const Expense = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    );

    return (
        <div className="exp-container">
            <div>
                <h4>Your Income</h4>
                <p  className='money plus'>+ Ksh {income}</p>
            </div>
            <div>
                <h4>Your Expense</h4>
                <p  className='money minus'>- Ksh {expense}</p>
            </div>
        </div>
    )
}

export default Expense;
