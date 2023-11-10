import './App.css';
import React from 'react';


//navbars
import Navbar_Homebuyer from './components/navbars/Navbar_Homebuyer'
import Navbar from './components/navbars/Navbar.js';
import Navbar_SysAdmin from './components/navbars/Navbar_SysAdmin.jsx' 
import Navbar_Brokers from './components/navbars/Navbar_Brokers.jsx' 
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import MakeOffer from './Pages/MakeOffer.js';
import Buy from './Pages/Buy';
import Broker from './Pages/Broker';
import Sign from './Pages/Sign';
import AboutUs from './Pages/AboutUs'
import PropertyPage from './Pages/PropertyPage';
import Profile from './Pages/Profile.js';
import Search from './Pages/Search';
import SearchForBrokers from './Pages/SearchForBrokers';
import Request_visite from './components/Request_visite';
import Offer from './Pages/Offer.js';
import Cookies from 'js-cookie';
// import fontawesome library
//import './fontawesome';

// set the cookie for usertype
//guest = 0 , system admin =1 , broker=2 , homebuyer/renter =3
Cookies.set('usertypeID', '2')






function App() {
const usertype = Cookies.get('usertypeID');

//Navbar rendered depends on usertype
function navbarChoice(){
 console.log(usertype);
  switch(usertype){
   case '0': 
       return <Navbar/>;
    case '1': return <Navbar_SysAdmin />;
    case '2': return <Navbar_Brokers />
    case '3': return <Navbar_Homebuyer/>; 
    default : return <Navbar/>;
   }
}



  return (
   <>
   <Router>
    
    {navbarChoice()} 
 

    <Routes>
      <Route path='/' exact element = {<Home/>} ></Route>
      <Route path='/makeoffer' exact element = {<MakeOffer/>} ></Route>
      <Route path='/sign-in' exact element = {<Sign/>} ></Route>
      <Route path='/buy' exact element = {<Buy/>} ></Route>
      <Route path='/Broker' exact element = {<Broker/>} ></Route>

      {/*HomeOwner / Renter property page */}
      <Route path='/propertyPage' exact element = {<PropertyPage/>} ></Route>
      {/* profile page */}
      <Route path='/profile' exact element = {<Profile/>} ></Route>
      {/*HomeOwner / Renter / Broker  Search for property page*/}
      <Route path='/search' exact element = {<Search/>} ></Route>
      <Route path='/broker' exact element = {<Broker/>} ></Route>
      <Route path='/about' exact element = {<AboutUs/>} ></Route>
      {/*HomeOwner / Renter Search for brokers*/}
      <Route path='/searchbrokers' exact element = {<SearchForBrokers/>} ></Route>
    
       {/*Brokers  offers */}
      {<Route path='/offer' exact element = {<Offer/>} ></Route>}
      
     {/*Brokers clients*/}
      {/* <Route path='/clients' exact element = {} ></Route>*/}

      {/*Route for request visit button to request to visit page*/}
      <Route path='/requestVisitForm' exact element = {<Request_visite/>} ></Route>

    </Routes>
    <Footer/>


   </Router>
   
   
   </>
  );
}

export default App;
