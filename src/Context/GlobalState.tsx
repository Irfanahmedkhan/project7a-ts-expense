import React, {createContext,useState } from 'react';
import { IDType, TransType} from '../Utilities/Types'


export const GlobalContext = createContext<any>(!undefined);



export const GlobalContextProvider = ({ children}: any) : JSX.Element => {



    const [Transactions, setTransactions] = useState<TransType[]>([])

   

    function addTransactions(TransactionDetail: string, TransactionAmount: number) {
        setTransactions([...Transactions, { TransactionDetail, TransactionAmount, id: new Date().getTime(), date: new Date().getTime(), }]);
    }
    



    const removeTransaction = (id: IDType) => {
        setTransactions(Transactions.filter((TransactionId: IDType) => TransactionId.id !== id));
        console.log(id);
        
    };


    return (

        <GlobalContext.Provider value={{ addTransactions, Transactions, removeTransaction }}>

            {children}

        </GlobalContext.Provider>
    )

}

