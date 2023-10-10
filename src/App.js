
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Sell from './components/Pages/Sell';
import Buy from './components/Pages/Buy';
import Broker from './components/Pages/Broker';
import Sign from './components/Pages/Sign';
function App() {

  return (
   <>
   <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' exact element = {<Home/>} ></Route>
    </Routes>
    <Footer/>
   </Router>
   
   
   </>
  );
}

export default App;
