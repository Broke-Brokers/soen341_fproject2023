import React from 'react'
import '../App.css' 
import '../components/PropertyGallery.css' 
import Card from '../components/Card';
import PropertyGallery from '../components/PropertyGallery';
import home_photo from '../Images/IMG_0197.JPG'

function PropertyPage() {
  return (
    <div className="headerGalleryContainer">
      <h1>Take a closer look at this property!</h1>
      <p>this is a test</p>
      <>

            <img src={home_photo} alt=''/>
         
        
        
    
       <PropertyGallery/>
        
      </>
    </div>
  )
}

export default PropertyPage
