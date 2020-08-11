import React, {useContext} from 'react'
import './Transactions.css'
import TransactionList from './TransactionList'
import AddTransactions from './AddTransactions'
import { GlobalContext } from '../Context/GlobalState';



function Transaction() {

    const { Transactions } = useContext(GlobalContext)

    console.log(Transactions);

    return  (

        <div className="book-list">
            <ul>
                {Transactions.map((Transactions: any, key: number) => {
                    return <TransactionList Transactions={Transactions} key={Transactions.id} />;
                })}
            </ul>


        

      {/* <div className='transaction-container'> */}
             {/* <h3> Transactions</h3> */}
            {/* <Income /> */}
             {/* <Expense /> */}
        < div > <AddTransactions /></div > 

        </div>
    )
}

export default Transaction