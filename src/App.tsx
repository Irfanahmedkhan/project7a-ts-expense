import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import firebase from './firebase'

import { Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from './Context/GlobalState';

// import TransactionList from "./Components/TransactionList";
import Profile from "./Components/Profile";
// import Balance from "./Components/Balance";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AddTransactions from "./Components/AddTransactions";
import Transaction from "./Components/Transaction";


function App(): JSX.Element  {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken ()
  }).then((token) => {
    console.log('token', token);
    
  })

  return (
    <GlobalContextProvider>

<div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard /> } />
          <Route path="/AddTransactions" element={<AddTransactions />} />
          {/* <Route path="/Balance" element={<Balance />} /> */}
          {/* <Route path="/TransactionList" element={<TransactionList />} /> */}
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

        <Footer />    
    </div>
    </GlobalContextProvider>
  );
}

export default App;
