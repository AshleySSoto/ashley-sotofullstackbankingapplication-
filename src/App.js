import React from 'react';
import './index.css';
import Navbar from './navbar';
import Home from './home';
import AllData from './alldata';
import Balance from './balance';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Login from './login';
import Withdraw from './withdraw';



function App() {
 let Component 
 switch (window.location.pathname){
  case '/':
    Component = <Home />
    break
    case '/create-account':
      Component = <CreateAccount />
      break
      case '/login':
      Component = <Login />
      break
      case '/all-data':
      Component = <AllData />
      break
      case '/deposit':
      Component = <Deposit />
      break
      case '/balance':
      Component = <Balance />
      break
      case '/withdraw':
      Component = <Withdraw />
      break
      default:
    }
    return (
      <div>
      <Navbar />
      <div className='container'>
      {Component}
      </div>
      </div>
    );
  }


export default App;
