import React from 'react'
import '../App.css' 
import  '../components/property-page/PropertyGallery.css';
import Card from '../components/Card';
import BrokerCard from '../components/property-page/BrokerCard';
import PropertyGallery from '../components/property-page/PropertyGallery';

import PropertyInfo from '../components/property-page/PropertyInfo';
import home_photo from '../Images/property_image_test1.jpg'


function PropertyPage() {
  return (
    
    
<>
<div>
  {/**Css of photoContainer and photochontainer will need to be mode to a photo component. */}
      <div className="photoContainer">
      <img src={home_photo} alt=''/>
      </div>
    
      <PropertyGallery/>
      </div>
   <div>
      <PropertyInfo/>
      <BrokerCard/>
      </div>
     
    
    </>
 
  )
}

export default PropertyPage
