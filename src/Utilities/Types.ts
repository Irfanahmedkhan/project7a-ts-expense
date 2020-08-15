

export type TransType = {
    TransactionDetail: string ;
    TransactionAmount: number;
    id: number;
    date: number;
    
};

export type StateType = { 
    transactions: Array<TransType>;
};


export type AddType = {
    TransactionDetail: string;
    TransactionAmount: number;
};

export type IDType = {
    id: number | any;
    
};


