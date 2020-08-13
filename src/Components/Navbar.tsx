import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import dashboard from '../images/dashboard.png'
import add from '../images/add.png'
import all from '../images/all.png'
import profile from '../images/profile.png'


function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='title'> Expense Tracker</div>
            <div className='links'> 
                <Link className='dashboard-link' to="/" ><img src={dashboard} alt='dashboard' /> </Link>
                <Link className='addtransactions-link' to="/AddTransactions" ><img src={add} alt='add' /></Link>

                <Link className='all-link' to="/Transaction" ><img src={all} alt='all' /></Link>
                <Link className='profile-link' to="/Profile" ><img src={profile} alt='Profile' /></Link>
            </div>
        </div>
    )
}

export default Navbar
