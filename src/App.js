
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sell from './Pages/Sell';
import Buy from './Pages/Buy';
import Broker from './Pages/Broker';
import Sign from './Pages/Sign';
import PropertyPage from './Pages/PropertyPage';
import Profile from './Pages/Profile'
import Search from './Pages/Search';
// import fontawesome library
import './fontawesome';



function App() {

  return (
   <>
   <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' exact element = {<Home/>} ></Route>
      <Route path='/Sell' exact element = {<Sell/>} ></Route>
      <Route path='/sign-in' exact element = {<Sign/>} ></Route>
      <Route path='/buy' exact element = {<Buy/>} ></Route>
      <Route path='/Broker' exact element = {<Broker/>} ></Route>
      

      {/*HomeOwner / Renter property page */}
      <Route path='/propertyPage' exact element = {<PropertyPage/>} ></Route>
      {/* profile page */}
      <Route path='/profile' exact element = {<Profile/>} ></Route>
      {/*HomeOwner / Renter / Broker  Search for property page*/}
      <Route path='/search' exact element = {<Search/>} ></Route>

      
    </Routes>
    <Footer/>


   </Router>
   
   
   </>
  );
}

export default App;
