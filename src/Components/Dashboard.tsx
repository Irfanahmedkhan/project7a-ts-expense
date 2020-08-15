import React, { useState } from "react";
import "./Dashboard.css";
import Modal from "react-modal";
import Balance from "./Balance";
// import Transaction from "./Transaction";
import add from '../images/add.png'
import AddTransactions from './AddTransactions'
import Chart from './Chart'




function Dashboard() {

  const [model, setmodel] = useState(false);

  return (
      <div className="dashboard-container">

        <div className="balance-div">
          <Balance />
        </div>

      <div className='chart-div'>
        <Chart />
      </div>
{/*       
      <div className="transaction-div">
        <Transaction />
      </div> */}



        





        
        <Modal
        isOpen={model}
        onRequestClose={() => setmodel(!true)}
        ariaHideApp={false}
          style={{
            overlay: {
              position: "fixed",
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            // alignItems: "center",

            content: {
              width: '250px',
              position: "relative",
              top: "150px",
              left: "0px",
              
              bottom: "150px",
              border: "1px solid #ccc",
              background: "#39759E",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "10px",
            },
          }}
        >
        <div>
          <button
            onClick={() => setmodel(!true)}
            style={{
              color: 'white',
              position: 'relative',
              top: '0px',
              backgroundColor: "#e73d1f",
              fontWeight: 600,
              padding: "10px",
              borderRadius: "5px",
              height: "30px"            }}
          >
            X
            </button>
        </div>
        <AddTransactions />
         
        </Modal>

   
        <img src={add} alt='add' id='bttn' className='btn'
        onClick={() => setmodel(true)}
          style={{ backgroundColor: "#e73d1f" }} />


      </div>
  );
}

export default Dashboard;
