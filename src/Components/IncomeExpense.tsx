import React, { useContext } from 'react'
import CountUp from 'react-countup';
import './IncomeExpense.css'

import { GlobalContext } from '../Context/GlobalState';


export const IncomeExpense = () => {
    const { Transactions } = useContext(GlobalContext);

    const amounts = Transactions.map((Transactions: { TransactionAmount: number})  => Transactions.TransactionAmount);

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
            <div className='income'>
                <h5>Income : <span>
                    <CountUp
                        start={0}
                        end=  {income}
                        duration={2}
                        separator=","
                        decimals={0}
                        decimal="."
                        prefix="RS." /> 
                </span> </h5>
                

            </div>

            <div className='expense'>
                <h5>Expense : <span>
                    
                    <CountUp
                        start={0}
                        end= {expense}
                        duration={2}
                        separator=","
                        decimals={0}
                        decimal="."
                        prefix="RS." /> 
                </span></h5>
                
                
            </div>

        </div>
    )
}

export default IncomeExpense;
