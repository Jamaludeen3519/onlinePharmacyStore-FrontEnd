import React from "react";
import "./Header.css";
import logo from '../images/logo.svg'
import cart from '../images/cart.svg'
import person from '../images/person.svg'

import { Link } from "react-router-dom";
 const Header = () => {
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <img src={logo}></img>
        <nav id='icon'>
          <ul>
            <li>
                <img src={person}></img> 
            </li>
            <li style={{borderRight:'2px solid grey',marginTop:'4%',marginBottom:'2%'}}>
              <Link to="/Login">Login</Link>
            </li>
            <li style={{marginTop:'4%'}}>
            <Link to="/Signup">Signup</Link>
            </li>
            <li>
                <img src={cart}></img>
            </li>
            <li style={{marginTop:'4%'}}>
                
            <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;