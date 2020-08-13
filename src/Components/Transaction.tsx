import React, {useContext} from 'react'
import './Transactions.css'
import TransactionList from './TransactionList'
import { GlobalContext } from '../Context/GlobalState';




function Transaction() {

    const { Transactions } = useContext(GlobalContext)

    console.log(Transactions);

    return  (

        <div className="transaction-container">
            <ul>
                {Transactions.map((Transactions: any, key: number) => {
                    return <TransactionList Transactions={Transactions} key={Transactions.id} />;
                })}
            </ul>

        </div>
    )
}

export default Transaction