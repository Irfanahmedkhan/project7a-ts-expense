import React, { useContext } from "react";
import "./Transactions.css";
import TransactionList from "./TransactionList";
import { GlobalContext } from "../Context/GlobalState";
import { TransType } from "../Utilities/Types";

function Transaction() {
  const { Transactions } = useContext(GlobalContext);


  return (
    <div className="transaction-container">
      <ul>
        {Transactions.map((Transactions: TransType, key: number) => {
          return <TransactionList Transactions={Transactions} key={key} />;
        })}
      </ul>
    </div>
  );
}

export default Transaction;
