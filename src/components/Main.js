import React from 'react'
import'./Main.css'
import '../App.css';
import { Link } from 'react-router-dom';
import backImage from '../Images/IMG_6840.JPG'
function Main() {
  return (
    <div className='main'style={{backgroundImage: `url(${backImage})`}}>
    <div className="headerContainer" >

    <h1 className="title-main">
      Building Dreams,One Home at a Time
      </h1>
      <Link to = "http://localhost:3000/search">
      <button className="customButton">Find Your Home</button>
      </Link>

    </div>

  
  </div>

  );
}

export default Main;
