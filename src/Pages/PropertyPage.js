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
 
    
      <PropertyGallery/>
      </div>
   <div>
      <PropertyInfoContainer/>
      <BrokerCard/>
      </div>
     
    
    </>
 
  )
}

export default PropertyPage
