import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';


// Navbars
import Navbar_Homebuyer from './components/navbars/Navbar_Homebuyer';
import Navbar from './components/navbars/Navbar';
import Navbar_SysAdmin from './components/navbars/Navbar_SysAdmin';
import Navbar_Brokers from './components/navbars/Navbar_Brokers';

// Components
import Footer from './components/Footer';

// Pages
import Home from './Pages/Home';
import MakeOffer from './Pages/MakeOffer.js';
import Buy from './Pages/Buy';
import Broker from './Pages/Broker';
import Sign from './Pages/Sign';
import AboutUs from './Pages/AboutUs';
import PropertyPage from './Pages/PropertyPage';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import SearchForBrokers from './Pages/SearchForBrokers';

import Offer from './Pages/Offer';
import Request_visite from './components/Request_visite';




function App() {
  const [userType, setUserType] = useState(Cookies.get('usertypeID') || 'guest');

  useEffect(() => {
    // Define the function that updates the state based on the cookie
    const handleCookieChange = () => {
      const userTypeFromCookie = Cookies.get('usertypeID') || 'guest';
      setUserType(userTypeFromCookie);
    };

    // Event listener for cookie changes - make sure this event is dispatched after cookie is set
    window.addEventListener('cookieChange', handleCookieChange);

    // Initial check in case the cookie is already set before the component mounts
    handleCookieChange();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('cookieChange', handleCookieChange);
    };
  }, []);

  // Function to determine which navbar to render based on userType
  function navbarChoice() {
    switch (userType) {
      case 'broker':
        return <Navbar_Brokers />;
      case 'home_buyer':
        return <Navbar_Homebuyer />;
      case 'system_admin':
        return <Navbar_SysAdmin />;
      default:
        return <Navbar />;
    }
  }

  return (

    <Router>
      {navbarChoice()} {/* Render the navbar based on the userType */}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/sell' exact element={<Sell />} />
        <Route path='/sign-in' exact element={<Sign />} />
        <Route path='/buy' exact element={<Buy />} />
        <Route path='/Broker' exact element={<Broker />} />
        <Route path='/propertyPage' exact element={<PropertyPage />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/search' exact element={<Search />} />
        <Route path='/broker' exact element={<Broker />} />
        <Route path='/about' exact element={<AboutUs />} />
        <Route path='/searchbrokers' exact element={<SearchForBrokers />} />
        <Route path='/offer' exact element={<Offer />} />
        <Route path='/requestVisitForm' exact element={<Request_visite />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
