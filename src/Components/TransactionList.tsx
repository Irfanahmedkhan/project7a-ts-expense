import React, { useContext } from "react";
import "./TransactionList.css";
import { GlobalContext } from "../Context/GlobalState";

import del from "../images/de.png";

type Props = {
  TransactionDetail: string;
  TransactionAmount: number;
  id: number;
  date: number;
};

const TransactionList: React.FC<Props | any> = ({ Transactions }) => {
  console.log(Transactions);

  const { removeTransaction } = useContext(GlobalContext);

  const sign = Transactions?.TransactionAmount < 0 ? "-" : "+";

  return (
    <div className="transactionlist-container">
      <div
        id="id-transactions"
        className={Transactions?.TransactionAmount > 0 ? "plus" : "minus"}
      >
        <img
          src={del}
          alt="delete"
          onClick={() => removeTransaction(Transactions.id)}
        />
        <div className="textdate">
          <h5>{Transactions?.TransactionDetail}</h5>
          <span className="date">
            {new Date(Transactions?.date).toDateString()}
          </span>
        </div>

        <h4>
          {sign}RS.{Transactions?.TransactionAmount}
        </h4>
      </div>
    </div>
  );
};

export default TransactionList;
