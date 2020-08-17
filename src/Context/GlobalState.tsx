import React, {createContext,useState } from 'react';
import { IDType, TransType} from '../Utilities/Types'


export const GlobalContext = createContext<TransType[]| any>([]);



const initial = [
    {
        TransactionAmount: 50000,
        TransactionDetail: "Salary",
        date: 1597648504311,
        id: 1597648504311,
    },
    
];

type TType = {
    TransactionAmount: number;
    TransactionDetail: string;
    date: number;
    id: number;
};

export const GlobalContextProvider = (props: { children: React.ReactNode; }) => {



    const [Transactions, setTransactions] = useState<TransType[]>(initial)




    function addTransactions(NewTransaction: TransType) {
        const { TransactionDetail, TransactionAmount} = NewTransaction
        setTransactions([...Transactions, { TransactionDetail, TransactionAmount, id: new Date().getTime(), date: new Date().getTime(), }]);
    }
    



    const removeTransaction = (id: IDType) => {
        setTransactions(Transactions.filter((TransactionId: IDType) => TransactionId.id !== id));
        console.log(id);
        
    };


    return (

        <GlobalContext.Provider value={{ addTransactions, Transactions, removeTransaction }}>

            {props.children}

        </GlobalContext.Provider>
    )

}

