

export type TransType = {
    id: number | string;
    TransactionDetail: string | number;
    TransactionAmount: number;
    
    
};

export type StateType = { 
    transactions: Array<TransType>;
};