import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const IncomeExpense = () => {
    const { Transactions } = useContext(GlobalContext);

    const amounts = Transactions.map((Transactions: any)  => Transactions.TransactionAmount);

    const income = amounts
        .filter((item: number) => item > 0)
        .reduce((acc: number, item: number) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts
        .filter((item: number) => item < 0)
        .reduce((acc: number, item: number) => (acc += item), 0))
        .toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>Rs. {income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='money-plus' className='money minus'>-Rs {expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;
