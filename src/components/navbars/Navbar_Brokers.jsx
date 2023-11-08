import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from './../Button';
import { ErrorBoundary } from "react-error-boundary";

import './Navbar.css';

function Navbar_Brokers() {
  
    const [click, setClick] = useState(false);
    const[button,setButton]= useState(true);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu=() => setClick(false); 

const showButton = ()=>{
    if (window.innerWidth<=960) {
        setButton(false);
    } else {
        setButton(true);
    }
};

useEffect(()=>{showButton();},[]);
window.addEventListener('resize', showButton);
  return (
    <>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
   <nav className="navbar">
    <div className="navbar-container"> 

        <Link to= "/"className="navbar-logo" onClick={closeMobileMenu}>
            BrokeBroker
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>

        


        <ul className={click? 'nav-menu active' : 'nav-menu'}>
          
        <li className='nav-item'>
          <Link to='/search' className='nav-links nav-button' onClick={closeMobileMenu}>
            Search for properties
              </Link>
              </li>
                
          <li className='nav-item'>
            <Link to='/clients' className='nav-links' onClick={closeMobileMenu}>
               Clients
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/offers' className='nav-links' onClick={closeMobileMenu}>
               Offers
            </Link>
          </li>
          

              <li className='nav-item'>
          <Link to='/profile' className='nav-links ' onClick={closeMobileMenu}>
            My Profile
              </Link>
              </li>

        </ul>
      {/*We will need to add  a signout */}
        {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}


        
    </div>
   </nav>
   </ErrorBoundary>
   </>
  );
}

export default Navbar_Brokers;
