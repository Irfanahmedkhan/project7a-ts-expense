import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import "./Balance.css";
import Chart from "./Chart";
import IncomeExpense from './IncomeExpense'

function Balance() {

  const { Transactions } = useContext(GlobalContext);

  const amounts = Transactions.map((Transactions: any) => Transactions.TransactionAmount);

  const total = amounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);


  


  return (
    <div className="balance-container">
<div className='balancetext'>
        <h2>Balance: {total}</h2>
        <IncomeExpense />
</div>
      
      <div className='chart'><Chart /></div>

    </div>
  );
}

export default Balance;
