import React from "react";
import "./Dashboard.css";

import Balance from "./Balance";
import Transactions from "./Transactions";
import { GlobalContextProvider } from '../Context/GlobalState';



function Dashboard() {
    
  return (
    <GlobalContextProvider>

    <div className="dashboard-container">

      <div className='balance'><Balance /></div>
      <div className='transactions'><Transactions /></div>

    </div>

    </GlobalContextProvider>
  );
}

export default Dashboard;
