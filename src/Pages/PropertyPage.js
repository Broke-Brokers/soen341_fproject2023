import React from 'react'
import '../App.css' 

import Card from '../components/Card';
import BrokerCard from '../components/property-page/BrokerCard';
import PropertyGallery from '../components/property-page/PropertyGallery';
import PropertyInfo from '../components/property-page/PropertyInfo';




function PropertyPage() {
  return (
    
    
<>
<PropertyGallery/>
   <div>
      <PropertyInfo/>
      <BrokerCard/>
      </div>
      <div>
  
    
  
  </div>
    
    </>
 
  )
}

export default PropertyPage
