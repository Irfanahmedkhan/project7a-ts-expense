import React, { useContext } from "react";
import CountUp from "react-countup";

import { GlobalContext } from "../Context/GlobalState";
import "./Balance.css";
import IncomeExpense from "./IncomeExpense";

function Balance() {
  const { Transactions } = useContext(GlobalContext);


  const amounts = Transactions.map(
    (Transactions: { TransactionAmount: number; }) => Transactions.TransactionAmount
  );

  const total = amounts
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance-container">
      <div className="balance">
        <div className="blancetext">
          <h3 >
            Balance :
            <span>
              
              <CountUp
                start={0}
                end= {total}
                duration={2.5}
                separator=","
                decimals={0}
                decimal="."
                prefix="RS." 
              />
            </span>
          </h3>
        </div>

        <>
          <IncomeExpense />
        </>
      </div>


    </div>
  );
}

export default Balance;
