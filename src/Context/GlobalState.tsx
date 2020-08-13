import React, {createContext,useState } from 'react';
// import { StateType } from '../Utilities/Types'
import { v4 as uuidv4 } from "uuid";


// const InitialState: any  = {

//     transactions: [  ]    
// };


export const GlobalContext = createContext<any>(!undefined);



export const GlobalContextProvider = ({ children}: any) : JSX.Element => {



    const [Transactions, setTransactions] = useState<any>([])

   

    function addTransactions(TransactionDetail: string, TransactionAmount: number) {
        setTransactions([...Transactions, { TransactionDetail, TransactionAmount, id: uuidv4(), date: new Date().getTime(), }]);
    }
    



    const removeTransaction = (id:number) => {
        setTransactions(Transactions.filter((a: any) => a.id !== id));
    };


    return (

        <GlobalContext.Provider value={{ addTransactions, Transactions, removeTransaction }}>

            {children}

        </GlobalContext.Provider>
    )

}

