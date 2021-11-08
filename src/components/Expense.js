import React, { useState } from 'react'

const Expense = () => {

    return (
        <div className="exp-container">
            <div>
                <h4>Income</h4>
                <p  className='money plus'>+ Ksh 0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  className='money minus'>- Ksh 0.00</p>
            </div>
        </div>
    )
}

export default Expense;
