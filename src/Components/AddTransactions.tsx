import React, { useState, useContext } from "react";
import './AddTransactions.css'
import { GlobalContext } from "../Context/GlobalState";



const AddTransactions = () => {

  const { addTransactions} = useContext(GlobalContext)
    
    
  const [inputfield, setinputfield] = useState(false);
  console.log(inputfield);
  

  const [TransactionDetail, setTransactionDetail] = useState<string>("");
  const [TransactionAmount, setTransactionAmount] = useState<number>(0);

  // console.log(TransactionDetail);
  // console.log(TransactionAmount);


  function onSubmitincome(e: React.MouseEvent<HTMLButtonElement>) {
    
    e.preventDefault();
    
    if (TransactionDetail.length < 1 || TransactionAmount < 1) {
      setinputfield(true)
      }
    
    else {
      const NewTransaction = {
        TransactionDetail,
        TransactionAmount: TransactionAmount,
      };
      console.log(NewTransaction);

      setTransactionDetail("");
      setTransactionAmount(0);

      addTransactions(TransactionDetail, +TransactionAmount);
    }

    
  }



  function onSubmitexpense(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

    if (TransactionDetail.length < 1 || TransactionAmount < 1) {
      setinputfield(true)
    }

    else {

      const newExpTransaction = {
        TransactionDetail,
        TransactionAmount: TransactionAmount
      };
      console.log(newExpTransaction);



      setTransactionDetail("");
      setTransactionAmount(0);

      addTransactions(TransactionDetail, -TransactionAmount);

  }
}


  return (
    <div className="addtransactions-container">
      <form>
        <div className="add-aransaction">
          <input
            type="text"
            placeholder="Add Transaction..."
            autoComplete="off"
            name="TransactionDetail"
            value={TransactionDetail}
            required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTransactionDetail(e.target.value)
            }
          ></input>
          <br />

          <input
            type="number"
            placeholder="Add Amount..."
            autoComplete="off"
            name="TransactionAmount"
            value={TransactionAmount}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTransactionAmount(parseFloat(e.target.value))
            }
          ></input>
          

          
        </div>
      </form>

      <div className='buttons'>
        <button className="incomesubmit" onClick={onSubmitincome}> Add Income </button>
        <button className="expensesubmit" onClick={onSubmitexpense}>Add Expense</button>
        <h5>*Transaction & Amount Field are Mandatory</h5>
      </div>
      

          
    </div>
  );
};

export default AddTransactions;
