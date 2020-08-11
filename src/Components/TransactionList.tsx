import React, {useContext} from 'react'
import './TransactionList.css'
import { GlobalContext } from '../Context/GlobalState';
// import { TransType } from '../Utilities/Types'




const TransactionList: React.FC<any> = ({ Transactions}) => {

    console.log(Transactions);

    const { removeTransaction} = useContext(GlobalContext)

    const sign = Transactions.TransactionAmount < 0 ? '-' : '+';


    return (
        <div className='income-container'>



            <div className='optionsdiv' >
                <li className={Transactions.TransactionAmount > 0 ? 'plus' : 'minus'}>
    <h2>{Transactions.TransactionDetail}</h2>
                    <h3>{sign}RS.{Transactions.TransactionAmount}</h3>
                    <p> {(new Date(Transactions.date).toDateString())} </p>
                    <button className="fav" onClick={() => removeTransaction(Transactions.id)}>
                        X
                    </button> 
                </li>
            </div>
            
        </div>
    )
}

export default TransactionList
