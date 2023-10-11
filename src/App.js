
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
function App() {

  return (
   <>
   <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' exact element = {<Home/>} ></Route>
      <Route path='/Sell' exact element = {<Sell/>} ></Route>

    </Routes>
    <Footer/>


   </Router>
   
   
   </>
  );
}

export default App;
