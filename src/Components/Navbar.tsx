import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import dashboard from '../images/dashboard.png'
import add from '../images/add.png'
import icon from '../images/icon.png'
import all from '../images/all.png'
import profile from '../images/profile.png'


function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='title'> <img src={icon} alt='icon' /> <span>Expense Tracker </span></div>
            <div className='links'> 
                <Link id='links' className='dashboard-link' to="/" ><img src={dashboard} alt='dashboard' /> <h5>DashBoard</h5> </Link>
                <Link id='links' className='addtransactions-link' to="/AddTransactions" ><img src={add} alt='add' /><h5>Add Transaction</h5></Link>

                <Link id='links' className='all-link' to="/Transaction" ><img src={all} alt='all' /><h5>All Transaction</h5></Link>
                <Link id='links' className='profile-link' to="/Profile" ><img src={profile} alt='Profile' /><h5>Profile</h5></Link>
            </div>
        </div>
    )
}

export default Navbar
