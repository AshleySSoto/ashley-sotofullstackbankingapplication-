import React from 'react';
import './index.css';

function NavBar(){
  return(
   <nav className="nav">
    <a href="/" className="Bad-Bank">
    Bad Bank
    </a>
    <ul>
      <li>
        <a href="/create-account">Create Account</a>
        </li>
        <li>
        <a href="/login">Login</a>
        </li>
        <li>
        <a href="/all-data">All Data</a>
        </li>
        <li>
        <a href="/balance">Balance</a>
        </li>
        <li>
        <a href="/deposit">Deposit</a>
        </li>
        <li>
        <a href="/withdraw">Withdraw</a>
      </li>
    </ul>
   </nav>
  );
}

export default NavBar;