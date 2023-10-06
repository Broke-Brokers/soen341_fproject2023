
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Sell from './Pages/Sell';
import Buy from './Pages/Buy';
import Broker from './Pages/Broker';
import Sign from './Pages/Sign';
function App() {
  let components
  /*switch (window.location.pathname) {
    case "/":
      components=<Home/>
      break;
      case "/Sell":
        components=<Sell/>
        break;
        case "/buy":
        components=<Buy/>
        break;
        case "/Broker":
        components=<Broker/>
        break;
        case "/sign-in":
        components=<Sign/>
        break;
  }*/
  return (
   <>
   <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' exact component = {Home} />

    </Routes>
   </Router>
   
   
   </>
  );
}

export default App;
