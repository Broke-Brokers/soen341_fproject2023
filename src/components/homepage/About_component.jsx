import React from 'react'
import './About_component.css';
import About_image from "../../Images/AboutUs.png"
function About_component() {
  return (
  
    <div className='bodyab'>
        <div className='container1ab'>
            
            <div className='boxrv'>
                <div className='left-partab'>
                
                  <img alt="golden-lines.png" class="image-block bg-image" src ={About_image}/>
     
                </div>
                <div className='right-partab'>

                <h1>About us </h1>
                <p class="texta">
                Welcome to BrokeBroker, your premier destination for a seamless home-buying experience! At BrokeBroker, we're more than a platform; we're a team of dedicated real estate professionals committed to simplifying your journey to finding the ideal home. Our approach is centered on transparency, integrity, and personalized service. With comprehensive listings, expert guidance, and a user-friendly platform, we strive to make your home-buying experience enjoyable and stress-free. Beyond transactions, we're here to build a community, connecting you with neighborhoods that suit your lifestyle. Trust BrokeBroker to be your partner in turning your dream home into a reality.
        </p>

               
                </div>
                 
    
            </div>
        </div>
        </div>
  )
}

export default About_component
