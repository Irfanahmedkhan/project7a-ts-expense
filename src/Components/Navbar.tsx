import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='navbar-container'>
            <div> expense tracker</div>
            <div className='links'> 
                <Link className='link' to="/" ><h3>Dashboard</h3></Link>
                
                <Link className='link' to="/Transactions" ><h3>Transactions</h3></Link>
                <Link className='link' to="/AddTransactions" ><h3>Add Transactions</h3></Link>
                <Link className='link' to="/Chart" ><h3>Profile</h3></Link>
            </div>
        </div>
    )
}

export default Navbar
