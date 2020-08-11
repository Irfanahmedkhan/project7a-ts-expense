import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import { Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from './Context/GlobalState';


import Balance from "./Components/Balance";
import Transactions from "./Components/Transactions";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AddTransactions from "./Components/AddTransactions";


function App(): JSX.Element  {
  return (
    <GlobalContextProvider>

<div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Balance" element={<Balance />} />
          <Route path="/AddTransactions" element={<AddTransactions />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/Chart" element={<Chart />} />
        </Routes>

        <Footer />    
    </div>
    </GlobalContextProvider>
  );
}

export default App;
